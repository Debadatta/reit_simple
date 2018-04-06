class CreateContactPhoneNumbers < ActiveRecord::Migration[5.0]
  def change
    create_table :contact_phone_numbers do |t|
      t.string :digits
      t.integer :contact_id
      
      t.timestamps
    end
  end
end
