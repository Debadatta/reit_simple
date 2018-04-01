class RegistrationController < ApplicationController
  skip_before_action :authenticate_request

  def signup
    user = User.new(user_params)

    if user.valid? && user.save
      command = AuthenticateUser.call(user_params[:email], user_params[:password])
      session[:user_token] = command.result

      if user.remember_me
        meta = { auth_token: command.result }
      end
      
      render_success(:ok, user, serializer: UserSerializer, meta: meta)
    else
      render_error(:unauthorized, [ title: user.errors.full_messages.to_sentence ])
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :user_interest_id, :user_ref_id, :remember_me, {phone_numbers_attributes: [:digits, :country_id]})
  end
end
