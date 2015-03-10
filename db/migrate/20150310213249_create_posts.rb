class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.binary :img, null: false
      t.integer :author_id, null: false
      t.string :text, null: false
      t.timestamps
    end
  end
end


## posts
# column name | data type | details
# ------------|-----------|-----------------------
# id          | integer   | not null, primary key
# img         | binary    | not null
# author_id   | integer   | not null, foreign key (references users)
# text        | string    |
