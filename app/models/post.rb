class Post < ActiveRecord::Base

  validates :author_id, :text, presence: true

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: "author_id",
    primary_key: "id"
  )

end


## posts
# column name | data type | details
# ------------|-----------|-----------------------
# id          | integer   | not null, primary key
# author_id   | integer   | not null, foreign key (references users)
# img         | binary    | not null
# text        | string    |
