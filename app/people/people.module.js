(function() {
    'use strict';

    angular.module('app.people', ['ngSanitize'])
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/app/people/people.template.html',
                controller: 'PeopleController as $ctrl'
            })
            .state('person', {
                url: '/person/:id',
                templateUrl: '/app/people/person-detail.template.html',
                controller: 'PersonDetailController as $ctrl'
            });
    }

})();