require 'action_view'

class Post < ActiveRecord::Base
  include ActionView::Helpers::DateHelper

  has_attached_file :picture, :styles => { :large => "510x510#", :small => "156x156#"}, :processors => [:cropper]
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/

  validates :author_id, presence: true
  validates_attachment_presence :picture

  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h
  # after_update :reprocess_avatar#, :if => cropping

  # def cropping?
    # !crop_x.blank? && !crop_y.blank? && !crop_w.blank? && !crop_h.blank?
  # end

  # def reprocess_picture
      # picture.reprocess!# unless cropping?
  # end

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: "author_id",
    primary_key: "id"
  )

  has_many(
    :likes,
    class_name: "Like",
    foreign_key: :post_id,
    primary_key: :id
  )

  has_many(
    :likers,
    through: :likes,
    source: :liker
  )

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :post_id,
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

end
