(function() {
    'use strict';

    angular.module('app.about', [])
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: '/app/about/about.template.html',
                controller: 'AboutController as $ctrl'
            });
    }

})();