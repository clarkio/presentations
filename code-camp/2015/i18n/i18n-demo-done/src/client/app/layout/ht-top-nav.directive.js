(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('htTopNav', htTopNav);

    /* @ngInject */
    function htTopNav () {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '='
            },
            templateUrl: 'app/layout/ht-top-nav.html'
        };

        /* @ngInject */
        function TopNavController($translate) {
            var vm = this;
            vm.changeLanguage = changeLanguage;
        
            function changeLanguage(languageKey) {
                $translate.use(languageKey);
            }
        }

        return directive;
    }
})();




$translateProvder.translations('en', {
    'HELLO_WORLD': 'Hello World'
});