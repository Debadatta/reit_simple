class OmniauthCallbacksController < ApplicationController
  skip_before_action :authenticate_request

  def login
    pwd = CustomToken.friendly_token
    user = User.from_omniauth(params[:user], pwd)

    if user.persisted?
      command = AuthenticateUser.call(user.email, pwd, true)

      if command.success?
        session[:user_token] = command.result
        render_success(:ok, user, meta: { auth_token: command.result })
      else
        render_error(:unauthorized, [ title: command.errors.values.flatten.join(', ') ])
      end
    end
  end
end
