class EmailPreferenceSettingsController < ApplicationController
  def show
    render_success(:ok, current_user.email_preference_setting)
  end

  def update
    if current_user.email_preference_setting.update_attributes(setting_params)
      render_success(:ok, current_user.email_preference_setting)
    else
      render_error(:unprocessable_entity, [title: current_user.email_preference_setting.errors.full_messages.to_sentence])
    end
  end

  private

  def setting_params
    params.require(:email_preference_setting).permit(:news_and_announcements_enabled, :bulletin_enabled, :courses_enabled)
  end
end