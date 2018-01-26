class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request, only: [:login, :logout]

  def login
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      user = User.find_by_email(params[:email])
      session[:user_token] = command.result
      render_success(:ok, user, meta: { auth_token: command.result })
    else
      render_error(:unauthorized, [ title: command.errors.values.flatten.join(', ') ])
    end
  end

  def identity
    if current_user
      render_success(:ok, current_user)
    else
      render_error(:unauthorized, [ title: "failed to authenticate" ])
    end
  end

  def logout
    reset_session
    render json: nil
  end
end
