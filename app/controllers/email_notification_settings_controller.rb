class EmailNotificationSettingsController < ApplicationController
  def show
    render_success(:ok, current_user.email_notification_setting)
  end

  def update
    if current_user.email_notification_setting.update_attributes(setting_params)
      render_success(:ok, current_user.email_notification_setting)
    else
      render_error(:unprocessable_entity, [title: current_user.email_notification_setting.errors.full_messages.to_sentence])
    end
  end

  private

  def setting_params
    params.require(:email_notification_setting).permit(:filter_notification_enabled, :property_availability_enabled, :property_updates_enabled)
  end
end