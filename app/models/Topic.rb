class Topic < ActiveRecord::Base

  has_many(
    :tags,
    class_name: "Tag",
    foreign_key: :topic_id,
    primary_key: :id
  )

  has_many(
    :posts,
    through: :tags,
    source: :post
  )

end
