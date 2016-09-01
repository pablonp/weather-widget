'use strict';
describe('Service :: ForecastSrv', function() {
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
  beforeEach(inject(function(_ForecastSrv_) {
    service = _ForecastSrv_;
  }));

  it(':: Get Data',function(){

  });
});
