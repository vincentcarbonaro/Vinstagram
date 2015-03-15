require 'action_view'

class Post < ActiveRecord::Base
  include ActionView::Helpers::DateHelper

  validates :author_id, :text, presence: true

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: "author_id",
    primary_key: "id"
  )

  def Time_Ago
    time_ago_in_words(self.created_at)
  end

  def self.get_posts(current_user)
    followees = current_user.followees.includes(:posts)
    followees << current_user

    posts = []

    followees.each do |followee|
      followee.posts.each do |post|
        posts << post
      end
    end
    posts
  end
end


## posts
# column name | data type | details
# ------------|-----------|-----------------------
# id          | integer   | not null, primary key
# author_id   | integer   | not null, foreign key (references users)
# img         | binary    | not null
# text        | string    |
