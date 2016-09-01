'use strict';

angular
  .module('ngWeatherWidget')
  .controller('MainCtrl', function(
    $scope,
    $window,
    $cookies,
    $filter,
    $location,
    $log,
    $rootScope,
    AerisSrv,
    ForecastSrv,
    LocationSrv,
    ParamsSrv,
    WeatherSrv
  ) {

    $scope.hello = 'Hello World';
    $scope.weather = {};

    var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'],
      defaultSource = 'aeris';

    $scope.getDay = function(day) {
      var index = currentDay + day;

      if (index > 6) {
        index = (currentDay - day) - 1;
        if (index < 0)
            index = index * -1;
      }
      return days[index];
    };

    var currentDay = new Date().getDay();

    init();


    function init() {

    }

    $rootScope.$on('weather::source::' + defaultSource + '::loaded', function() {
      $scope.weather = WeatherSrv.getWeather(defaultSource);
      $log.info($scope.weather);
    });
  });
