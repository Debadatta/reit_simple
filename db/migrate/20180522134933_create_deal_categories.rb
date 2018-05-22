class CreateDealCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :deal_categories do |t|
      t.string :name

      t.timestamps
    end

    ["Featured", "New", "Higher ROI", "Quicker Turn", "Unoccupied"].each do |c|
      DealCategory.create(name: c)
    end
  end
end
