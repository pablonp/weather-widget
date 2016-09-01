'use strict';
describe('Service :: AerisSrv', function() {
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
  beforeEach(inject(function(_AerisSrv_) {
    service = _AerisSrv_;
  }));

  it(':: Get Data',function(){

  });
});
