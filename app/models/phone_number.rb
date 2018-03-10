class PhoneNumber < ApplicationRecord
  validates_presence_of :digits
  belongs_to :user, optional: true
end
