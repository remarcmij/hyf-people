(function() {
    'use strict';

    angular.module('app', ['ui.router', 'ngMaterial', 'app.people', 'app.navigation', 'app.about'])
        .constant('appTitle', 'Hack Your Future People')
        .constant('apiEndPoint', 'http://localhost:3000')
        .config(config);

    config.$inject = ['$urlRouterProvider'];

    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }

})();