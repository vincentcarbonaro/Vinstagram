json.extract! @user, :id, :username, :num_followers, :num_followees

json.posts @user.posts do |post|
  json.extract! post, :id, :text, :Time_Ago, :created_at
end
