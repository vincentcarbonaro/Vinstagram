require 'rails_helper'

RSpec.describe User, type: :model do

    it "Validates A user with a username, email, and password_digest" do
      expect(FactoryGirl.build(:user)).to be_valid
    end

    it "Requires a username" do
      expect(FactoryGirl.build(:user, username:"")).to be_invalid
    end

    it "Requires an email" do
      expect(FactoryGirl.build(:user, email:"")).to be_invalid
    end

    it "Requires a password_digest" do
      expect(FactoryGirl.build(:user, password_digest:"")).to be_invalid
    end

end
 
# If you've already run rails generate rspec:install, then Rails will
# automatically make spec files for you when you generate a model.
# Otherwise, run rails generate rspec:model #{model_name}.
#
# To run the model tests file-by-file, run rspec spec/models/{model_name}_spec.rb
