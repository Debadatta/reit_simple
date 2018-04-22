class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id

  has_one :business_contact, serializer: ContactSerializer
  has_one :operations_contact, serializer: ContactSerializer
  has_one :financial_contact, serializer: ContactSerializer

  has_one :company_phone_number
  has_one :company_address
end
