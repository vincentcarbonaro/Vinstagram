class Comment < ActiveRecord::Base

  validates :post_id, :author_id, :body, presence: true

  # belongs_to(
  #   :author
  # )



end



# create_table "comments", force: :cascade do |t|
#   t.integer  "post_id",    null: false
#   t.integer  "author_id",  null: false
#   t.text     "body",       null: false
#   t.datetime "created_at"
#   t.datetime "updated_at"
# end
