class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :full_name, :login_count, :first_name
end
