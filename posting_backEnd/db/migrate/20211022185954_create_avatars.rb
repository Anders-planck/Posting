class CreateAvatars < ActiveRecord::Migration[6.1]
  def change
    create_table :avatars do |t|
      t.string :name
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
