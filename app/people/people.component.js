(function() {
    'use strict';

    angular.module('app.people')
        .component('hyfPeople', {
            templateUrl: '/app/people/people.component.html',
            bindings: {
                persons: '<'
            },
            controller: PeopleController
        });

    PeopleController.$inject = ['$state', '$mdSidenav', '$window', 'appTitle'];

    function PeopleController($state, $mdSidenav,  $window, appTitle) {

        var ctrl = this;
        ctrl.appTitle = appTitle;
        ctrl.onClick = onClick;
        ctrl.openMenu = openMenu;
        ctrl.openSidenav = openSidenav;
        ctrl.visitMainSite = visitMainSite;

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