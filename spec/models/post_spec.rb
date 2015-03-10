require 'rails_helper'

RSpec.describe Post, type: :model do

  it { should validate_presence_of(:img) }
  it { should validate_presence_of(:author_id) }

end

# If you've already run rails generate rspec:install, then Rails will
# automatically make spec files for you when you generate a model.
# Otherwise, run rails generate rspec:model #{model_name}.
#
# To run the model tests file-by-file, run rspec spec/models/{model_name}_spec.rb

# create_table "posts", force: :cascade do |t|
#   t.binary   "img",        null: false
#   t.integer  "author_id",  null: false
#   t.string   "text",       null: false
#   t.datetime "created_at"
#   t.datetime "updated_at"
# end
