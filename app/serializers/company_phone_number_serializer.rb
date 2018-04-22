class CompanyPhoneNumberSerializer < ActiveModel::Serializer
  attributes :id, :digits, :company_id
end
