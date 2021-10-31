json.extract! flikr_photo_tag, :id, :created_at, :updated_at
json.url flikr_photo_tag_url(flikr_photo_tag, format: :json)
