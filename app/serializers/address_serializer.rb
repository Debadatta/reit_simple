class AddressSerializer < ActiveModel::Serializer
    attributes :id, :street1, :street2, :city, :state, :postal_code
end