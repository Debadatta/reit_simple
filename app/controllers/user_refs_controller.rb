class UserRefsController < ApplicationController
  skip_before_action :authenticate_request, only: [:index]

  def index
    render_success(:ok, UserRef.all)
  end
end
