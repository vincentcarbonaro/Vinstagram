json.extract! @user, :id, :username, :num_followers, :num_followees

json.is_current_user is_current_user?(@user)

json.posts @user.posts do |post|
  json.extract! post, :id, :text, :Time_Ago, :created_at
end


# json.is_following? is_following?(@user)
