json.extract! @post, :id, :text, :Time_Ago, :created_at


json.user do
  json.extract! @post.user, :id, :username
end
