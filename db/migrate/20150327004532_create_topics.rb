class CreateTopics < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.string :name, null: false
    end
  end
end
