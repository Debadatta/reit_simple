class CreateCompanyPhoneNumbers < ActiveRecord::Migration[5.0]
  def change
    create_table :company_phone_numbers do |t|
      t.string :digits
      t.integer :company_id
      
      t.timestamps
    end
  end
end
