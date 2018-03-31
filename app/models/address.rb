class Address < ApplicationRecord
  belongs_to :user

  validates_presence_of :street1
  validates_presence_of :city
  validates_presence_of :state
  validates_presence_of :postal_code
end
