(function() {
    'use strict';

    angular.module('app.people')
        .component('hyfPeople', {
            templateUrl: '/app/people/people.template.html',
            bindings: {
                persons: '<'
            },
            controller: PeopleController
        });

    PeopleController.$inject = ['$state', '$mdSidenav', '$window', 'appTitle'];

    function PeopleController($state, $mdSidenav,  $window, appTitle) {

        //////// View Model ////////

        var ctrl = this;
        ctrl.appTitle = appTitle;
        ctrl.onClick = onClick;
        ctrl.openMenu = openMenu;
        ctrl.openSidenav = openSidenav;
        ctrl.visitMainSite = visitMainSite;

        //////// Implementation ////////

        function onClick(id) {
            $state.go('person', { id: id })
        }

        function openSidenav() {
            $mdSidenav('left').toggle();
        }

        function openMenu($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        }

        function visitMainSite() {
            var win = $window.open('http://www.hackyourfuture.net/', '_blank');
            win.focus();
        }
    }
})();