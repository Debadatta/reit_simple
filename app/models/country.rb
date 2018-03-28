class Country < ApplicationRecord
  belongs_to :phone_number, optional: true
end
