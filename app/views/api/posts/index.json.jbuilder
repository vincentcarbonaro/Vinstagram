### Post Index View - Retrieve all feed posts

json.array! @posts do |post|

  json.extract! post, :id, :text, :Time_Ago, :created_at, :num_likes

  json.likes post.likes, :id, :liker_id, :created_at

  json.picture_url image_url(post.picture.url(:large))

  json.author post.author, :id, :username

  json.author_thumb image_url(post.author.picture.url(:small))

  json.is_liked post.likers.include?(current_user)

  json.comments post.comments do |comment|
    json.extract! comment, :id, :body, :created_at
    json.author comment.author, :id, :username
    json.is_current_user is_current_user?(comment.author)
    json.is_post_owner post.author == current_user
  end

end
