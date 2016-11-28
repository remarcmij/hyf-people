(function() {
    'use strict';

    angular.module('app.people')
        .controller('PersonDetailController', PersonDetailController);

    PersonDetailController.$inject = ['$state', '$window', 'peopleService'];

    function PersonDetailController($state, $window, peopleService) {

        //////// View Model ////////

        var vm = this;
        vm.person = null;
        vm.roleTitle = null;
        vm.openExternalUrl = openExternalUrl;

        //////// Implementation ////////

        activate();

        function activate() {
            peopleService.getPersonById($state.params.id)
                .then(function(person) {
                    vm.person = person;
                    vm.roleTitle = peopleService.roleTitles[person.role];
                })
                .catch(function(e) {
                    alert(e.message)
                });
        }

        function openExternalUrl(url) {
            var win = $window.open(url, '_blank');
            win.focus();
        }
    }
})();