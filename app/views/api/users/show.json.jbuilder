# namespaces all the post data undera  key called post

json.post do
  json.extract! @user, :id, :username, :email, :created_at
end

json.posts @user.posts do |post|
  json.extract! post, :id, :author_id, :text, :created_at
end
