class CreateCompanyAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :company_addresses do |t|
      t.string :street1
      t.string :street2
      t.string :city
      t.string :state
      t.string :postal_code
      t.integer :company_id
      
      t.timestamps
    end
  end
end
