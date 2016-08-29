(function () {

    'use strict';

    /** @ngInject */
    function keypress($document, $rootScope, BrandSrv, ParamsSrv) {
        var secret_active = false;
        var directive = {
            restrict: 'A',
            link: function () {
                var secret_keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], secret_index = 0;
                $document.unbind('keydown')
                    .bind('keydown', function (e) {
                        if (e.target.tagName == 'INPUT') return;
                        var key = e.which;
                        console.log(key);
                        if (key === secret_keys[secret_index++]) {
                            if (secret_index === secret_keys.length && ParamsSrv.SC == 'true') {
                                secretKey();
                                secret_index = 0;
                            }
                        } else {
                            secret_index = 0;
                        }
                    });
            }
        };
        function secretKey() {
            if (secret_active) {
            } else {
                /*
                 * Cool Konami code here
                 */
            }
        }


        return directive;
    }

    angular
        .module('ngWeatherWidget')
        .directive('keypressEvents', keypress);

})();
