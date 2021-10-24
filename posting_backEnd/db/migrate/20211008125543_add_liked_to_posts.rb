class AddLikedToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :liked, :integer,:default =>  0
    #Ex:- :default =>''
  end
end
