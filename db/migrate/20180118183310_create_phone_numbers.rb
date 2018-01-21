class CreatePhoneNumbers < ActiveRecord::Migration[5.0]
  def change
    create_table :phone_numbers do |t|
      t.string :digits
      t.integer :user_id

      t.timestamps
    end
  end
end