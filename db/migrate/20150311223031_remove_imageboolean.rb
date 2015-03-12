class RemoveImageboolean < ActiveRecord::Migration
  def change
    remove_column :posts, :img
  end
end
