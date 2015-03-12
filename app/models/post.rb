require 'action_view'

class Post < ActiveRecord::Base
  include ActionView::Helpers::DateHelper

  validates :author_id, :text, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: "author_id",
    primary_key: "id"
  )

  def Time_Ago
    time_ago_in_words(self.created_at)
  end

end


## posts
# column name | data type | details
# ------------|-----------|-----------------------
# id          | integer   | not null, primary key
# author_id   | integer   | not null, foreign key (references users)
# img         | binary    | not null
# text        | string    |
