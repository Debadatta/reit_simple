class UsersController < ApplicationController
  def profile
    if request.get?
      render_success(:ok, current_user, serializer: UserContactInfoSerializer)
    else
      if user_params.present?
        current_password = params[:user].delete(:current_password)
        
        if current_password.present?
          command = AuthenticateUser.call(current_user.email, current_password)
          
          if  command.failure?
            errors = [title: "Enter correct current password"]
          end
        end

        if errors.blank? && current_user.update_attributes(user_params)
          render_success(:ok, current_user, serializer: UserContactInfoSerializer)
        else
          render_error(:unprocessable_entity, errors || current_user.errors)
        end
      end      
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, 
      :last_name, :password, :password_confirmation, 
      {phone_numbers_attributes: [:id, :digits, :country_id]},
      {addresses_attributes: [:id, :street1, :street2, :city, :state, :postal_code]})
  end
end
