class CreateEmailNotificationSettings < ActiveRecord::Migration[5.0]
  def change
    create_table :email_notification_settings do |t|
      t.boolean :filter_notification_enabled, default: false
      t.boolean :property_availability_enabled, default: false
      t.boolean :property_updates_enabled, default: false
      t.integer :user_id

      t.timestamps
    end
  end
end
