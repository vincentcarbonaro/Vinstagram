# we have @user, all the users your friends with

json.array! @users do |user|

  json.array! user.posts.each do |post|
    json.extract! post, :id, :text, :Time_Ago, :created_at
  end

end
