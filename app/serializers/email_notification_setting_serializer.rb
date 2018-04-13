class EmailNotificationSettingSerializer < ActiveModel::Serializer
  attributes :id, :filter_notification_enabled, :property_availability_enabled, :property_updates_enabled, :user_id
end