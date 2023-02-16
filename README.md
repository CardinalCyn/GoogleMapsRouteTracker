# GoogleMapsRouteTracker

This is a google maps route tracker. Save up to 10 routes, and track the time it takes to reach your destination, as well as keep track of direction links for your routes! These routes' times are updated regularly, and are saved to your account. Additionally, you can set a desired route time to notify you when your route time is below the actual route time!

This app uses an angular front-end, and a flask back-end. Socket-io is used to transmit an update for the client to reload routes. Direction times are calculated using Google Cloud's API.
# READ THIS
# Before you get started
This application uses Google Maps Directions, Places, and JS API, so 1 key is required for the front-end code for map-rendering and places, and another is used for the back-end for directions calculations. In your index.html in the client code, a html script tag should be structured like this:
<script src="https://maps.googleapis.com/maps/api/js?key=APIKEYHERE&callback=Function.prototype&libraries=places"></script>
Replace APIKEYHERE with your google cloud API key.

For server side, you'll need to create a config.py file like such:

SESSION_SECRET_KEY='randomstringhere'

CLIENT_LINK="https://localhost:4200" <-angular domain

DB_LINK='mongodb://localhost:27017/' <-your mongodb link

MAPS_API_KEY='your api key' <- your serverside google cloud api key

DOMAIN='127.0.0.1' <-your flask hosting domain


This server uses https, so an ssl cert/key is required for both the server, and client. I used mkcert for this, as self-signed certificates aren't sufficient for cookie-setting
For client side, place them in the ssl folder at the client root, and server-side, place them in the root of the server file.
To run the client, use npm start
To run the server, use flask run --cert local-cert.pem --key local-key.pem