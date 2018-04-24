class OmniauthCallbacksController < ApplicationController
  skip_before_action :authenticate_request, only: [:login, :signup]

  def login
    pwd = CustomToken.friendly_token
    user = User.login_from_omniauth(params[:user], pwd)

    if user && user.persisted?
      command = AuthenticateUser.call(user.email, pwd, true)

      if command.success?
        session[:user_token] = command.result
        render_success(:ok, user, meta: { auth_token: command.result })
      else
        render_error(:unauthorized, [ title: command.errors.values.flatten.join(', ') ])
      end
    else
      render_error(:unauthorized, [title: 'User not found. Please click "Sign Up" to create an account'])
    end
  end

  def signup
    user = User.find_by_email(params[:user]["_profile"]["email"])

    if !user
      pwd = CustomToken.friendly_token
      user = User.signup_from_omniauth(params[:user], pwd)

      if user.persisted?
        command = AuthenticateUser.call(user.email, pwd, true)

        if command.success?
          session[:user_token] = command.result
          render_success(:ok, user, meta: { auth_token: command.result })
        else
          render_error(:unauthorized, [ title: command.errors.values.flatten.join(', ') ])
        end
      end
    else
      render_error(:unauthorized, [], userExist: true)
    end
  end

  def connect
    auth = params[:user]

    if current_user.email == auth["_profile"]["email"] && current_user.social_providers.where(provider: auth["_provider"]).blank?
      current_user.create_social_provider(auth)
      render_success(:ok, current_user, serializer: UserContactInfoSerializer)
    else
      render_error(:unprocessable_entity, [ title: "Your social logged in email should be same as registered email" ])
    end
  end
end
