class AddCloumnsToCountries < ActiveRecord::Migration[5.0]
  def up
    add_column :countries, :country_code, :string
    add_column :countries, :is_preferred, :boolean
    rename_column :countries, :phone_code, :dial_code
    change_column :countries, :dial_code, :integer
    remove_column :countries, :code
  end

  def down
    remove_column :countries, :country_code
    remove_column :countries, :is_preferred
    rename_column :countries, :dial_code, :phone_code
  end
end
