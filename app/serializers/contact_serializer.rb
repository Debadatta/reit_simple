class ContactSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :title, :contactable_id

  has_one :contact_phone_number
  has_one :contact_email_address
end
