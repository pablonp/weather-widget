'use strict';
describe('Service :: WeatherSrv', function() {
  var service,
    $locationMock = {
      search: function() {
        return {
          A: 1,
          b: 2
        }
      }
    };
  beforeEach(module(function($provide) {
    $provide.value('$location', $locationMock);
  }));
  beforeEach(module('ngWeatherWidget'));
  // instantiate service
  beforeEach(inject(function(_WeatherSrv_) {
    service = _WeatherSrv_;
  }));

  it(':: Add Source',function(){
      _WeatherSrv_.addWeatherData(options);
  });

  it(':: Get Source',function(){
    WeatherSrv.getData(source);
  });
});
