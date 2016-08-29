(function() {
  'use strict';

  /**
   * {Factory} ParamsSrv
   * Retrieve the params
   */
  angular
    .module('ngWeatherWidget')
    .factory('ParamsSrv', function($location) {
      var self = {};

      init();
      /**
       * @name init
       * @description Sets up the params
       */
      function init() {
        _.each($location.search(), function(value, key) {
          self[key.toUpperCase()] = value;
        });
      }

      return self;
    });
})();
