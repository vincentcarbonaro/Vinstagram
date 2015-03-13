class Comment < ActiveRecord::Base

  validates :post_id, :author_id, :body, presence: true

  # belongs_to(
  #   :author
  # )
end
