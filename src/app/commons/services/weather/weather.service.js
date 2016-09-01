(function() {
  'use strict';

  /**
   * {Factory} ParamsSrv
   * Retrieve the params
   */
  angular
    .module('ngWeatherWidget')
    .factory('WeatherSrv', function($http, $log, $rootScope, LocationSrv) {
      var self = { },
        weather = { };

      init();


      /**
       * @name init
       * @description Makes initial call
       */
      function init() {
      }


      function addWeatherData(source, location, current, summary, data) {
        if (data.length < 7) {
          $log.warn('Adding less forecast than needed');
        }
        weather[source] = {
          current: current,
          location: location,
          data: data
        };

        $rootScope.$broadcast('weather::source::' + source + '::loaded');

        return weather[source];
      }

      self.addWeatherData = addWeatherData;


      function getWeather(source) {
        // ToDo: Check if the source is valid or not
        return weather[source];
      }

      self.getWeather = getWeather;

      return self;
    });
})();
