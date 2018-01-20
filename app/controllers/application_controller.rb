class ApplicationController < ActionController::Base
  include ParamsNormalizer

  before_action :authenticate_request
  attr_reader :current_user

  protected

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end

  def refreshed_token
    JsonWebToken.encode(user_id: current_user.id) if current_user
  end

  def render_json_api(resource, options = {})
    options[:adapter] ||= :json_api
    options[:key_transform] ||= :camel_lower
    options[:serialization_context] ||= ActiveModelSerializers::SerializationContext.new(request)
    ActiveModelSerializers::SerializableResource.new(resource, options)
  end

  def render_success(status, resource, options = {})
    # inject the current (refreshed) JWT token into the meta area if the user is logged in,
    # and if there isn't already a token being returned, if auto-renew is allowed by this firm
    if current_user.present? && !(options[:meta].present? && options[:meta][:authToken].present?)
      options[:meta] ||= {}
      options[:meta][:authToken] = refreshed_token
    end
    render json: render_json_api(resource, options).as_json, status: status
  end

  def render_error(status, errors = [], meta = {})
    render json: { errors: errors, meta: meta }, status: status
  end
end
