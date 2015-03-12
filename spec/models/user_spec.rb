require 'rails_helper'

describe User, type: :model do

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }

end

# If you've already run rails generate rspec:install, then Rails will
# automatically make spec files for you when you generate a model.
# Otherwise, run rails generate rspec:model #{model_name}.
#
# To run the model tests file-by-file, run rspec spec/models/{model_name}_spec.rb

# create_table "users", force: :cascade do |t|
#   t.string   "username",        null: false
#   t.string   "email",           null: false
#   t.string   "password_digest", null: false
#   t.string   "session_token"
#   t.datetime "created_at"
#   t.datetime "updated_at"
# end
