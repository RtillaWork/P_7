# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@boulderBikeRaceEvent = Event.create!(
  { :name => 'Boulder Bike tour',
    :city => 'Boulder',
    :state => 'Colorado',
    :latitude => 40.016573,
    :longitude => -105.286382,
    :date => DateTime.new(2020, 04, 01, 00, 00, 00),
    :category => 'Bike race',
    :numberOfParticipants => '20',
    :description => 'Annual Boulder, CO bike race' }
)

@boulderBikeRaceEvent.flikr_photo_tags.create!([
                                                 {
                                                   "hashtag": "#bikerace",
                                                 },
                                                 {
                                                   "hashtag": "#BoulderBikeTour",
                                                 }
                                               ])

@boulderBikeRaceEvent.riders.create!([
                                       {
                                         "firstName": "Dustin",
                                         "lastName": "Green",
                                         "cityOfOrigin": "Hickory Hills",
                                         "stateOfOrigin": "IL",
                                         "latitude": 40,
                                         "longitude": -105.35,
                                       },
                                       {
                                         "firstName": "Jason",
                                         "lastName": "Finn",
                                         "cityOfOrigin": "Huntington Beach",
                                         "stateOfOrigin": "CA",
                                         "latitude": 39.95,
                                         "longitude": -105.24
                                       },
                                       {
                                         "firstName": "Howard",
                                         "lastName": "Thompson",
                                         "cityOfOrigin": "Hale",
                                         "stateOfOrigin": "MO",
                                         "latitude": 40.06,
                                         "longitude": -105.26
                                       },
                                       {
                                         "firstName": "Maggie",
                                         "lastName": "Lantz",
                                         "cityOfOrigin": "Dublin",
                                         "stateOfOrigin": "OH",
                                         "latitude": 40.03,
                                         "longitude": -105.23
                                       },
                                       {
                                         "firstName": "Lawrence",
                                         "lastName": "Duran",
                                         "cityOfOrigin": "Fort Myers",
                                         "stateOfOrigin": "FL",
                                         "latitude": 40.04,
                                         "longitude": -105.23
                                       },
                                       {
                                         "firstName": "Irene",
                                         "lastName": "Molina",
                                         "cityOfOrigin": "Tucson",
                                         "stateOfOrigin": "AZ",
                                         "latitude": 39.96,
                                         "longitude": -105.22
                                       },
                                       {
                                         "firstName": "Nancy",
                                         "lastName": "Garner",
                                         "cityOfOrigin": "Baltimore",
                                         "stateOfOrigin": "MD",
                                         "latitude": 39.98,
                                         "longitude": -105.21
                                       },
                                       {
                                         "firstName": "Tara",
                                         "lastName": "Taylor",
                                         "cityOfOrigin": "Minneapolis",
                                         "stateOfOrigin": "MN",
                                         "latitude": 40,
                                         "longitude": -105.25
                                       },
                                       {
                                         "firstName": "Alejandro",
                                         "lastName": "Smith",
                                         "cityOfOrigin": "Scarborough",
                                         "stateOfOrigin": "ME",
                                         "latitude": 40.02,
                                         "longitude": -105.26
                                       },
                                       {
                                         "firstName": "Tricia",
                                         "lastName": "Renshaw",
                                         "cityOfOrigin": "Mystic",
                                         "stateOfOrigin": "CT",
                                         "latitude": 40.02,
                                         "longitude": -105.3
                                       },
                                       {
                                         "firstName": "Travis",
                                         "lastName": "Cook",
                                         "cityOfOrigin": "Twin Lakes",
                                         "stateOfOrigin": "WI",
                                         "latitude": 40.01,
                                         "longitude": -105.2
                                       },
                                       {
                                         "firstName": "Joan",
                                         "lastName": "Brooks",
                                         "cityOfOrigin": "Norfolk",
                                         "stateOfOrigin": "VA",
                                         "latitude": 39.98,
                                         "longitude": -105.24
                                       },
                                       {
                                         "firstName": "Joseph",
                                         "lastName": "Rodgers",
                                         "cityOfOrigin": "Wayne",
                                         "stateOfOrigin": "NJ",
                                         "latitude": 39.99,
                                         "longitude": -105.25
                                       },
                                       {
                                         "firstName": "Matthew",
                                         "lastName": "Gregson",
                                         "cityOfOrigin": "Brashear",
                                         "stateOfOrigin": "MO",
                                         "latitude": 40.01,
                                         "longitude": -105.29
                                       },
                                       {
                                         "firstName": "Katie",
                                         "lastName": "Dunlap",
                                         "cityOfOrigin": "Marion",
                                         "stateOfOrigin": "VA",
                                         "latitude": 39.97,
                                         "longitude": -105.27
                                       },
                                       {
                                         "firstName": "Leo",
                                         "lastName": "Howard",
                                         "cityOfOrigin": "Dallas",
                                         "stateOfOrigin": "TX",
                                         "latitude": 39.97,
                                         "longitude": -105.33
                                       },
                                       {
                                         "firstName": "Maria",
                                         "lastName": "Baisden",
                                         "cityOfOrigin": "Raleigh",
                                         "stateOfOrigin": "NC",
                                         "latitude": 40,
                                         "longitude": -105.29
                                       },
                                       {
                                         "firstName": "Sandy",
                                         "lastName": "Townsend",
                                         "cityOfOrigin": "Newport",
                                         "stateOfOrigin": "PA",
                                         "latitude": 40.05,
                                         "longitude": -105.3
                                       },
                                       {
                                         "firstName": "Melinda",
                                         "lastName": "Stephenson",
                                         "cityOfOrigin": "Kahului",
                                         "stateOfOrigin": "HI",
                                         "latitude": 39.99,
                                         "longitude": -105.31
                                       },
                                       {
                                         "firstName": "Jason",
                                         "lastName": "Nichols",
                                         "cityOfOrigin": "Alexandria",
                                         "stateOfOrigin": "VA",
                                         "latitude": 40.01,
                                         "longitude": -105.32
                                       }
                                     ])