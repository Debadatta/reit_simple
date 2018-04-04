class CreateContactEmailAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :contact_email_addresses do |t|
      t.string :address
      t.integer :contact_id
      
      t.timestamps
    end
  end
end
