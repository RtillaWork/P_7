# json.array! @riders, partial: "riders/rider", as: :rider

json.array! @riders do |rider|
  json.riderID rider.id
  json.firstName rider.firstName
  json.lastName rider.lastName
  json.latitude rider.latitude
  json.longitude rider.longitude
end
