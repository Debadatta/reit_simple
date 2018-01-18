class CreateUserRefs < ActiveRecord::Migration[5.0]
  def change
    create_table :user_refs do |t|
      t.string :title

      t.timestamps
    end
  end
end
