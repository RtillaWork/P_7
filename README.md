# Create a website for a prestigious bike race

Allow people to track riders, see Flickr photos from the event,
and more via a site back-end, front-end, and external APIs!

### Skills acquired in this project

Use an external API in JavaScript
Write tests that assess the functionality of a program
Develop a website for a client
Design a database schema

openClassrooms | Project 7 | Bike Race
Colorado at the foot of the Rocky Mountains. It's the Boulder Bike Tour it's
coming up in 2020!

Requirements The organizers have several requirements:

outdoors-y and athletic feeling.

cleandesign and plenty of bicycle or athletic imagery.

*must be a home page with:

- basic information about the event
  -a counter that shows the number of months, days, hours, minutes, and seconds until the race (April 1, 2020).

*photos page: photos from Flickr tagged with the hashtags:
-#bikerace and #BoulderBikeTour.
-should be only 40 photos displayed at a time (which means you
can choose either infinite scroll or pagination).

*location page: all current rider locations.
-Since the bike race happens in the future, this will be placeholder data (which is provided below)

*There must be a riders page that displays
-each rider's first name, last name, and city of origin.
-There should be 20 riders in total.
-Since the bike race happens in the future, this will be placeholder data (which is provided below).

*there must be a contest page:
-organizers are sponsoring for anyone to come up with a slogan for the race.
-allows anyone to submit their first name, last name, email address, and a slogan idea under 50 characters.
-All fields must have validations.
-Submissions should be saved to the database in a: submissions table.

=> Placeholder data Since the riders aren't finalized yet, and their locations aren't available before the race starts,
the
organizers have given you placeholder data to use as part of your prototype:
-Find rider names and their fictional, temporary latitudes and longitudes in this spreadsheet.
-The latitudes and longitudes will be useful for visualizing the riders on a
map.

=>be using external services, like Flickr and Google Maps,

Flickr API We recommend you use the Flickr Photo APi. The documentation is
provided here:  https://www.flickr.com/services/api/

If you need help with using the API, Flickr provides a dedicated User Group:
https://www.flickr.com/groups/api/

=>Once you're set up with authentication, using the API is straightforward!

=>Don't worry about the fact that photos you're retrieving today don't have
anything to do with the actual bike race, since it's in the future. The
organizers only want to see what the site would look like, even if the photos
aren't accurate!

*Google Maps API In the final version of the website:
-viewers will be able to track riders' locations in real-time.
-However, because the bike race takes place in the future, you will use static placeholder data for the riders'
positions now.
-The placeholder locations are all in or around the city of Boulder, Colorado.
-The placeholder data is in a spreadsheet that was linked above (but if you need it again, here it is).
-Each rider should be indicated on a map of Boulder as a marker. Find
documentation about displaying a map of a certain place, as well as markers,
here:
https://developers.google.com/maps/documentation/javascript/examples/marker-simple

-tell which marker represents each fictional rider:
++should also add an information window to each marker that lists a first name and last
name.
++When users click on a marker on the map, the information window will
appear.
++These names should correspond to the riders listed on the riders page
of the website (that you define, because the riders are fictional for now).
Find more documentation about adding info windows to markers on Google Maps
here: https://developers.google.com/maps/documentation/javascript/infowindows

=>Before the race, the organizers will collaborate with the winning to developer
to replace the placeholder data with real data and set up real-time rider
tracking. This isn't something you need to worry about! The placeholder data
is all you need to make a great-looking and realistic prototype.

=You must write standard Rails tests!
=This is your chance to take a website online.

=>Skills:
Design a database schema
Create a web page that addresses the needs of a client
Use an external API in JavaScript
Develop a website for a client
Write tests that assess the functionality of a program
