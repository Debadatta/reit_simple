class AddColumnsToContacts < ActiveRecord::Migration[5.0]
  def change
    add_column :contacts, :contactable_id, :integer
    add_column :contacts, :contactable_type, :string

    add_index :contacts, [:contactable_type, :contactable_id]
  end
end
