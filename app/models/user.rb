class User < ApplicationRecord
  has_secure_password

  has_many :phone_numbers
  belongs_to :user_interest
  belongs_to :user_ref

  accepts_nested_attributes_for :phone_numbers

  validates_presence_of :first_name, :last_name, :email, :password, :password_confirmation
end
