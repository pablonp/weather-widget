'use strict';

describe('Directive :: Theme', function () {

  // load the directive's module
  beforeEach(module('ngWeatherWidget'));

  var element,scope,paramsSrv, rootScope;

  beforeEach(inject(function ($injector, $httpBackend, ParamsSrv) {
    rootScope = $injector.get('$rootScope');
    spyOn(rootScope, '$on').and.callFake(function(event, callback) {
      callback();
    });

    ParamsSrv.TH = 'dark';
    scope = rootScope.$new();

    paramsSrv = ParamsSrv;
  }));

  it('Add class', inject(function ($compile) {
    spyOn(paramsSrv,'TH').and.returnValue('dark');
    element = angular.element('<div theme></div>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.hasClass('dark')).toBe(true);
  }));

  it('If dark, remove others', inject(function ($compile) {
    var styles = $('<div>')
                  .append('<link href="dark">')
                  .append('<link href="light">');
    spyOn(paramsSrv,'TH').and.returnValue('dark');
    spyOn(window,'$').and.callFake(function(selector){
      if(selector == 'link')
        return styles.children()
      return angular.element(selector);
    });
    element = angular.element('<div theme></div>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(styles.children().length).toBe(2);
  }));
});
