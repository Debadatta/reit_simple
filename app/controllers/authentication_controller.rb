class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request, only: [:login, :logout, :forgot, :reset]

  def login
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      user = User.find_by_email(params[:email])
      session[:user_token] = command.result
      user.set_login_info
      user.save
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

  def forgot
    user = User.find_by_email(params[:email])

    if user
      user.create_reset_code
      render json: { message: "Check your email for a password reset link. If you do not see the email in your inbox, please check your spam folder." }, status: :ok
    else
      render_error(:unprocessable_entity, [title: "We don't recognize that email ID. Please try again."])
    end
  end

  def reset
    user = User.find_by_reset_code(params[:reset_code])

    if user
      if request.get?
        render_success(:ok, user)
      else
        User.transaction do
          user.password = params[:user][:password]
          user.password_confirmation = params[:user][:password_confirmation]

          if user.save
            command = AuthenticateUser.call(user.email, params[:user][:password])

            if command.success?
              session[:user_token] = command.result
              render_success(:ok, user, meta: { auth_token: command.result })
            end
            user.delete_reset_code
          else
            render_error(:unprocessable_entity, [title: 'There was an error changing your password. Are you sure you typed the same password in twice?'])
          end
        end
      end
    else
      render_error(:unprocessable_entity, [title: 'Sorry, we couldn\'t find any user with that reset code.'])
    end
  end
end
