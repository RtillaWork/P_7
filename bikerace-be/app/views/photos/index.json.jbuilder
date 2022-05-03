# json.array! @flikr_photo_tags, partial: "flikr_photo_tags/flikr_photo_tag", as: :flikr_photo_tag

json.array! @photo_tags do |photo_tag|
  json.photoTag photo_tag.hashtag
end