json.extract! @user, :id, :email, :num_followees, :num_followers
json.picture_url image_url(@user.picture.url)
json.user_since @user.created_at.strftime("%D")
