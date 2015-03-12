### Post Show View - View for a Single Post

json.extract! @post, :id, :text, :Time_Ago, :created_at, :author

json.user do
  json.extract! @post.author, :id, :username
end
