(function() {
  'use strict';

  /**
   * {Factory} ParamsSrv
   * Retrieve the params
   */
  angular
    .module('ngWeatherWidget')
    .factory('ForecastSrv', function($http, $log, LocationSrv, WeatherSrv) {
      var self = {};

      // This needs to be moved to a backend solution (PHP or NodeJS proxy endpoint) since the
      // API key should NOT be public.
      var config = {
        apiKey: 'aa43a9285ba3cbf9993080154260af9f',
        url: 'https://api.forecast.io/forecast/'
      };

      init();


      /**
       * @name init
       * @description Makes initial call
       */
      function init() {
        LocationSrv.getPosition().then(function(pos) {
            getForecast(pos.lat, pos.long);
        });
      }


      /**
       * @name getForecast
       * @description Gets the forecast for a given lat long.
       */
      function getForecast(lat, long) {
        var urlFormatted = config.url + config.apiKey + '/' + lat + ',' + long
        $http.get(urlFormatted, {}).then(function(response) {
          var data = response.data,
            forecast = [];
          _.forEach(data.daily.data, function(value, key) {
            forecast.push({
              min: value.apparentTemperatureMin,
              max: value.apparentTemperatureMax,
              summary: value.summary
            });
          });

          var location = data.timezone.split('/');

          $log.info(data);
          location = {
            country: location[1].replace('_', ' '),
            state: location[2].replace('_', ' ')
          };

          WeatherSrv.addWeatherData('forecast', location, data.currently.apparentTemperature, data.daily.summary, forecast);
        })
      }

      return self;
    });
})();
