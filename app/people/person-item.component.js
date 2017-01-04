(function() {
    'use strict';

    angular.module('app.people')
        .component('hyfPersonItem', {
            templateUrl: '/app/people/person-item.component.html',
            bindings: {
                person: '<',
                onClick: '&'
            },
            controller: PersonItemController
        });

    PersonItemController.$inject = ['peopleService'];

    function PersonItemController(peopleService) {

        var ctrl = this;
        ctrl.getRoleTitle = getRoleTitle;

        function getRoleTitle(role) {
            return peopleService.roleTitles[role];
        }
    }

})();