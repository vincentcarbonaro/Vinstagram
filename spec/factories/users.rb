# create_table "users", force: :cascade do |t|
#   t.string   "username",        null: false
#   t.string   "email",           null: false
#   t.string   "password_digest", null: false
#   t.string   "session_token"
#   t.datetime "created_at"
#   t.datetime "updated_at"
# end

# validates :username, :email, :password_digest, :session_token, presence: true
# validates :password, length: { minimum: 6, allow_nil: true }
# validates :username, :email, uniqueness: true

FactoryGirl.define do

  factory :user do
    username 'username'
    email 'user@name.com'
    password_digest 'asdf1234'
  end

end
