### Post Index View - Retrieve all feed posts

json.array! @posts do |post|
  json.extract! post, :id, :text, :Time_Ago, :created_at, :author
end
