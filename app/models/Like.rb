class Like < ActiveRecord::Base

  validates :post_id, :liker_id, presence: true

  belongs_to(
    :liker,
    class_name: "User",
    foreign_key: :liker_id,
    primary_key: :id
  )

  belongs_to(
    :post
  )

end
