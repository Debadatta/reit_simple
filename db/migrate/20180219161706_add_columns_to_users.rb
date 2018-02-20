class AddColumnsToUsers < ActiveRecord::Migration[5.0]
  def change
    change_table(:users) do |t|
      t.column :remember_token, :string, limit: 40
      t.column :remember_token_expires_at, :datetime
      t.column :reset_code, :string, limit: 255
      t.column :activation_code, :string, limit: 40
      t.column :activated_at, :datetime
    end

    add_index :users, :remember_token, unique: true
  end
end
