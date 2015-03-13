### Post Show View - View for a Single Post

json.extract! @post, :id, :text, :Time_Ago, :created_at, :author

json.is_current_user is_current_user?(@post.author)
