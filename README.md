# Weather Widget
Simple weather widget which allows the user to add new sources from where to get the weather data.

## Install
- npm install
- bower install

## Run
- *gulp serve* runs the source
- *gulp serve:dist* runs the source with the minified files

## Build
- *gulp build*

## Unit Testing
- *gulp test* runs the tests in the background and generates coverage with istanbul
- *gulp test:auto* runs the tests in watch mode

## ToDo
- Add proxy server to avoid having the api keys for the sources in the client side.
- Updates background image based on user location (maybe connect with flickr?) and weather
- Ability to change the temperature from Farenheit to Celcius
- Ability to change user location.
- Create locations map
