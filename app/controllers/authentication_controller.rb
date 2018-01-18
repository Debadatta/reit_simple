class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request

  def login
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      render_success(:ok, [], meta: { auth_token: command.result })
    else
      render_error(:unauthorized, [ title: command.errors ])
    end
  end
end
