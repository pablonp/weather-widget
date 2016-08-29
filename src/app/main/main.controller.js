'use strict';

angular
  .module('ngWeatherWidget')
  .controller('MainCtrl', function(
    $scope,
    $window,
    $cookies,
    $filter,
    $location,
    ParamsSrv
  ) {

    $scope.hello = 'Hello World';

    init();


    function init() {

    }
  });
