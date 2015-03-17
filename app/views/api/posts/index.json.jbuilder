### Post Index View - Retrieve all feed posts

json.array! @posts do |post|

  json.extract! post, :id, :text, :Time_Ago, :created_at, :num_likes

  json.picture_url image_url(post.picture.url)

  json.author post.author, :id, :username

  json.is_liked Post.is_liked?(@current_user, post)

  json.comments post.comments, :body, :created_at, :author_name

end
