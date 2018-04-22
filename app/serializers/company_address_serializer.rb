class CompanyAddressSerializer < ActiveModel::Serializer
  attributes :id, :street1, :street2, :city, :state, :postal_code, :company_id
end