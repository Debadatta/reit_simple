class UserContactInfoSerializer < ActiveModel::Serializer
  attributes :id, :email, :full_name, :login_count, :first_name, :last_name
  attributes :phone_number, :address

  def phone_number
    PhoneNumberSerializer.new(object.phone_numbers.first, { root: false }) if object.phone_numbers.first
  end

  def address
    AddressSerializer.new(object.addresses.first, { root: false }) if object.addresses.first
  end
end
