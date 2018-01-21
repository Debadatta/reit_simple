class UserInterestsController < ApplicationController
  skip_before_action :authenticate_request, only: [:index]

  def index
    render_success(:ok, UserInterest.all)
  end
end
