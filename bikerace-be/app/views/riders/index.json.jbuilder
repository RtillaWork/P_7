# json.array! @riders, partial: "riders/rider", as: :rider

json.array! @riders do |rider|
  json.riderID rider.id
  json.firstName rider.firstName
  json.lastName rider.lastName
  json.city rider.cityOfOrigin
  json.state rider.stateOfOrigin
end