class AddColumnToUsersTable < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :user_interest_id, :integer
    add_column :users, :user_ref_id, :integer
    add_column :users, :country_id, :integer
  end
end
