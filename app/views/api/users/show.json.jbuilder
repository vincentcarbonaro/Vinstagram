json.extract! @user, :id, :username, :num_followers, :num_followees, :bio

json.picture_url image_url(@user.picture.url(:small))

json.is_current_user is_current_user?(@user)

json.is_following is_following?(@user)

json.posts @user.posts do |post|
  json.extract! post, :id, :text, :Time_Ago, :created_at

  json.picture_url image_url(post.picture.url)

end
