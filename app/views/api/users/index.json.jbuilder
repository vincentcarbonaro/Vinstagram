## namespaces all the post data undera  key called post

json.array! @users do |user|

  json.extract! user, :id, :username, :email, :created_at

  json.posts user.posts do |post|
    json.extract! post, :id, :author_id, :text, :created_at
  end

end

# create_table "posts", force: :cascade do |t|
#   t.integer  "author_id",  null: false
#   t.string   "text",       null: false
#   t.datetime "created_at"
#   t.datetime "updated_at"
# end
#
# create_table "users", force: :cascade do |t|
#   t.string   "username",        null: false
#   t.string   "email",           null: false
#   t.string   "password_digest", null: false
#   t.string   "session_token"
#   t.datetime "created_at"
#   t.datetime "updated_at"
# end
