class EmailPreferenceSettingSerializer < ActiveModel::Serializer
  attributes :id, :news_and_announcements_enabled, :bulletin_enabled, :courses_enabled, :user_id
end   