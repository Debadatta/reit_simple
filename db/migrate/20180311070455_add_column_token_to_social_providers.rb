class AddColumnTokenToSocialProviders < ActiveRecord::Migration[5.0]
  def change
    add_column :social_providers, :token, :string
  end
end
