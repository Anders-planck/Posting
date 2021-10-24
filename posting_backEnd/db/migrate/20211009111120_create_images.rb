class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :name
      t.integer :size
      t.belongs_to :user, index: true
      t.belongs_to :post, index: true
      t.timestamps
    end
  end
end
