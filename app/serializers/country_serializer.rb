class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :dial_code, :country_code, :is_preferred
end
