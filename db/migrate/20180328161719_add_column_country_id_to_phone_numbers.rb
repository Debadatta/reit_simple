class AddColumnCountryIdToPhoneNumbers < ActiveRecord::Migration[5.0]
  def change
    add_column :phone_numbers, :country_id, :integer
  end
end
