# json.results @search_results, :id, :username

json.results @search_results do |result|

  json.extract! result, :id, :username

  json.picture_url image_url(result.picture.url)

end
