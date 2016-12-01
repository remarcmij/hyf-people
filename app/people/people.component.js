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

        var vm = this;
        vm.appTitle = appTitle;
        vm.onClick = onClick;
        vm.openMenu = openMenu;
        vm.openSidenav = openSidenav;
        vm.visitMainSite = visitMainSite;

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