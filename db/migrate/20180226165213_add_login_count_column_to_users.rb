class AddLoginCountColumnToUsers < ActiveRecord::Migration[5.0]
  def change
    change_table(:users) do |t|
      t.column :login_count, :integer, default: 0
      t.column :last_login_at, :datetime
    end
  end
end
