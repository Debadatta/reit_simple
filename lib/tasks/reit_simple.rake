namespace :reit_simple do
  desc "Create user email preference setting and email notification setting"
  task create_email_preference_and_notification_setting: :environment do
    User.all.each do |user|
      user.create_email_preference_setting unless user.email_preference_setting
      user.create_email_notification_setting unless user.email_notification_setting
    end
  end
end
  