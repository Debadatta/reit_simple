class Contact < ApplicationRecord
  has_one :contact_phone_number, dependent: :destroy, autosave: true
  has_one :contact_email_address, dependent: :destroy, autosave: true

  accepts_nested_attributes_for :contact_phone_number
  accepts_nested_attributes_for :contact_email_address
end
