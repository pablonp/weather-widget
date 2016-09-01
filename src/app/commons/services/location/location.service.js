(function() {
  'use strict';

  /**
   * {Factory} ParamsSrv
   * Retrieve the params
   */
  angular
    .module('ngWeatherWidget')
    .factory('LocationSrv', function($http, $log, $q, $window) {
      var self = {
        latitude: '0',
        longitude: '0'
      },
      ready = false;

      self.getPosition = function() {
        var deferred = $q.defer();
        if (ready) {
          deferred.resolve({
            lat: self.latitude,
            long: self.longitude
          });
        } else {
          getCurrentPosition().then(function(pos) {
            updateCurrentPosition(pos);
            deferred.resolve({
              lat: self.latitude,
              long: self.longitude
            });
          });
        }

        return deferred.promise;
      };

      init();
      
      /**
       * @name init
       * @description Setups basic structure
       */
      function init() {
        getCurrentPosition().then(updateCurrentPosition);
      }

      function getCurrentPosition() {
        var deferred = $q.defer();

        if ($window.navigator.geolocation) {
          $window.navigator.geolocation.getCurrentPosition(
                function (position) {
                    deferred.resolve(position);
                },
                function (err) {
                    deferred.reject(err);
                });
        } else {
          deferred.reject('Geolocation not supported by the browser.');
        }

        return deferred.promise;
      }

      function  updateCurrentPosition(pos) {
          self.longitude = pos.coords.longitude;
          self.latitude = pos.coords.latitude;
          ready = true;
          $log.info('Location found', pos);
      }

      return self;
    });
})();
