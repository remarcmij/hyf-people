(function() {
    'use strict';

    angular.module('app.people')
        .controller('PeopleController', PeopleController);

    PeopleController.$inject = ['$state', '$mdSidenav', '$mdDialog', '$window', '$log', 'appTitle', 'peopleService'];

    function PeopleController($state, $mdSidenav, $mdDialog, $window, $log, appTitle, peopleService) {

        //////// View Model ////////

        var vm = this;
        vm.appTitle = appTitle;
        vm.persons = [];
        vm.onClick = onClick;
        vm.openMenu = openMenu;
        vm.openSidenav = openSidenav;
        vm.visitMainSite = visitMainSite;

        //////// Implementation ////////

        activate();

        function activate() {
            peopleService.getAllPeople()
                .then(function(persons) {
                    vm.persons = persons;
                })
                .catch(function(e) {
                    alert(e.message)
                });
        }

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