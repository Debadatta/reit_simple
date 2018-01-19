class RegistrationController < ApplicationController
  skip_before_action :authenticate_request

  def signup
    user = User.new(user_params)

    if user.valid? && user.save
      command = AuthenticateUser.call(params[:email], params[:password])
      render_success(:ok, user, serializer: UserSerializer, meta: { auth_token: command.result })
    else
      render_error(:unauthorized, [ title: user.errors.full_messages.to_sentence ])
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password_confirmation, {phone_numbers: [:digits, :user_id]})
  end
end
