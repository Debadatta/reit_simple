class CreateEmailPreferenceSettings < ActiveRecord::Migration[5.0]
  def change
    create_table :email_preference_settings do |t|
      t.boolean :news_and_announcements_enabled, default: false
      t.boolean :bulletin_enabled, default: false
      t.boolean :courses_enabled, default: false
      t.integer :user_id

      t.timestamps
    end
  end
end
