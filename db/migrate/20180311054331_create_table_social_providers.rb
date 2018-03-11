class CreateTableSocialProviders < ActiveRecord::Migration[5.0]
  def change
    create_table :social_providers do |t|
      t.string :provider
      t.string :uid
      t.integer :user_id
    end

    add_index :social_providers, [:provider, :user_id], unique: true
  end
end
