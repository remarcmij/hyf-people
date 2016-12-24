(function() {
    'use strict';

    angular.module('app.people')
        .component('hyfPersonItem', {
            templateUrl: '/app/people/person-item.template.html',
            bindings: {
                person: '<',
                onClick: '&'
            },
            controller: PersonItemController
        });

    PersonItemController.$inject = ['peopleService'];

    function PersonItemController(peopleService) {

        //////// View Model ////////

        var ctrl = this;
        ctrl.getRoleTitle = getRoleTitle;

        //////// Implementation ////////

        function getRoleTitle(role) {
            return peopleService.roleTitles[role];
        }
    }

})();