(function() {

  'use strict';

  /** @ngInject */
  function themeDirective($rootScope, $timeout, ParamsSrv) {
    var directive;

    directive = {
        restrict: 'A',
        link: function(scope, element) {
            var remove;

            var supportedThemes = ['dark'];
            var brandTheme = ParamsSrv.TH;

            _.find(angular.element('link'), function(val) {
              var href = angular.element(val).attr('href');
              _.forEach(supportedThemes, function(value) {
                if (href.indexOf(value) > -1 && angular.element(val).attr('rel') == 'stylesheet' && href.indexOf(brandTheme) == '-1') {
                  angular.element(val).remove();
                }
              });
            });

            angular.element('html').removeClass('hidden');
        }
      };

    return directive;
  }

  angular
    .module('ngWeatherWidget')
    .directive('theme', themeDirective);

})();
