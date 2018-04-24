class UserContactInfoSerializer < ActiveModel::Serializer
  attributes :id, :email, :full_name, :login_count, :first_name, :last_name, :social_login_status
  attributes :phone_number, :address

  def phone_number
    PhoneNumberSerializer.new(object.phone_numbers.first, { root: false }) if object.phone_numbers.first
  end

  def address
    AddressSerializer.new(object.addresses.first, { root: false }) if object.addresses.first
  end

  def social_login_status
    {
      fb: object.social_providers.where(provider: 'facebook').present?,
      g: object.social_providers.where(provider: 'google').present?
    }
  end
end
