class AddRememberColumnToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :remember_me, :boolean, default: false
  end
end
