(function() {
    'use strict';

    angular.module('app.people', ['ngSanitize'])
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                component: 'hyfPeople',
                resolve: {
                    persons: resolvePeople
                }
            })
            .state('person', {
                url: '/person/:id',
                component: 'hyfPersonDetail',
                resolve: {
                    person: resolvePerson
                }
            });
    }

    resolvePeople.$inject = ['peopleService'];

    function resolvePeople(peopleService) {
        return peopleService.getAllPeople();
    }

    resolvePerson.$inject = ['$stateParams', 'peopleService'];

    function resolvePerson($stateParams, peopleService) {
        return peopleService.getPersonById($stateParams.id)
            .then(function(person) {
                person.roleTitle = peopleService.roleTitles[person.role];
                return person;
            })
    }

})();