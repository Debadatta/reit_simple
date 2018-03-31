class PhoneNumberSerializer < ActiveModel::Serializer
    attributes :id, :digits, :country_id
end