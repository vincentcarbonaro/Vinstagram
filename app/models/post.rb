require 'action_view'

class Post < ActiveRecord::Base
  include ActionView::Helpers::DateHelper

  has_attached_file :picture
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/

  validates :author_id, presence: true
  validates_attachment_presence :picture

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: "author_id",
    primary_key: "id"
  )

  has_many(
    :likes,
    class_name: "Like",
    foreign_key: "post_id",
    primary_key: :id
  )

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: "post_id",
    primary_key: :id
  )

  def self.is_liked?(user, post)
    !!Like.where(liker_id: user.id, post_id: post.id).first
  end

  def num_likes
    self.likes.count
  end

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
