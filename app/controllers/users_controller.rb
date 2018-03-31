class UsersController < ApplicationController
  def profile
    render_success(:ok, current_user, serializer: UserContactInfoSerializer)
  end
end
