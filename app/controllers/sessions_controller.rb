class SessionsController < ApplicationController

  before_action :require_signed_out, except: :destroy

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user

      ## delete all follows
      if user.username == "guest"
        user.follows.each do |follow|
          follow.delete
        end

        ## deletes post comments
        user.posts.each do |post|

          if post.id > 21
            post.delete
          else
            post.comments.each do |comment|
              comment.delete
            end
          end

        end

        ##reset bio
        user.bio = "Feel free to change the bio in the settings.  You can access it by hovering over the account title 'guest' in the top right corner"
        user.save!

        vin = User.where(username: 'Vin').first

        vin.posts.each do |post|
          post.comments.each do |comment|
            comment.delete
          end
        end

      end

      sign_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def destroy
    sign_out
    redirect_to new_session_url
  end

end

# create_table "follows", force: :cascade do |t|
#   t.integer  "follower_id", null: false
#   t.integer  "followee_id", null: false
# end
