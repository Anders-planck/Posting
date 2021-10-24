class CreateTags < ActiveRecord::Migration[6.1]
  def change
    create_table :tags do |t|
      t.text :body
      t.belongs_to :post, index: true, foreign_key: true

      t.timestamps
    end
  end
end
