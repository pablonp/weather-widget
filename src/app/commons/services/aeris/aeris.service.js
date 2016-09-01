(function() {
  'use strict';

  /**
   * {Factory} ParamsSrv
   * Retrieve the params
   */
  angular
    .module('ngWeatherWidget')
    .factory('AerisSrv', function($http, $log, LocationSrv, WeatherSrv) {
      var self = {};

      // This needs to be moved to a backend solution (PHP or NodeJS proxy endpoint) since the
      // API key should NOT be public.
      var config = {
        apiId: '5JXh7wuSdw3WGgszlqnvU',
        apiSecret: 'azTelGpo32UcMLAEUu22eLHC7RyDuqYBb4rHXCGW',
        url: 'https://api.aerisapi.com/forecasts/'
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
        var urlFormatted = config.url + 'closest?limit=8&p=' + lat + ',' + long + '&client_id=' + config.apiId + '&client_secret=' + config.apiSecret;
        $http.get(urlFormatted, {}).then(function(response) {
          var data = response.data.response[0],
            forecast = [],
            location = data.profile.tz.split('/');

          location = {
            country: location[1].replace('_', ' '),
            state: location[2].replace('_', ' ')
          };

          _.forEach(data.periods, function(value, key) {
            forecast.push({
              min: value.minTempF,
              max: value.maxTempF,
              summary: value.weatherPrimary
            });
          });

          $log.info(location);
          $log.info('Aeris',data);

          WeatherSrv.addWeatherData('aeris', location, data.periods[0].feelslikeF, data.periods[0].weatherPrimary, forecast);
        })
      }

      return self;
    });
})();
