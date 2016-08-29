(function () {
  'use strict';

  /**
   * Angular bootstrap configuration
   */
  angular
    .module('ngWeatherWidget', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngResource',
      'ui.router',
      'ui.bootstrap'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
              $stateProvider
                .state('home', {
                  url: '/',
                  templateUrl: 'app/main/main.html',
                  controller: 'MainCtrl'
                });

              $urlRouterProvider.otherwise('/');
            });
})();
