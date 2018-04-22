class Company < ApplicationRecord
  has_one :business_contact, dependent: :destroy, autosave: true, foreign_key: :contactable_id
  has_one :operations_contact, dependent: :destroy, autosave: true, foreign_key: :contactable_id
  has_one :financial_contact, dependent: :destroy, autosave: true, foreign_key: :contactable_id
  has_one :company_address, dependent: :destroy, autosave: true
  has_one :company_phone_number, dependent: :destroy, autosave: true

  accepts_nested_attributes_for :company_address
  accepts_nested_attributes_for :company_phone_number
  accepts_nested_attributes_for :business_contact
  accepts_nested_attributes_for :operations_contact
  accepts_nested_attributes_for :financial_contact
end
