json.extract! @user, :id, :email, :num_followees, :num_followers, :bio
json.picture_url image_url(@user.picture.url(:small))
json.user_since @user.created_at.strftime("%D")
