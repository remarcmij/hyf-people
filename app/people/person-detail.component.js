(function() {
    'use strict';

    angular.module('app.people')
        .component('hyfPersonDetail', {
            templateUrl: '/app/people/person-detail.template.html',
            bindings: {
                person: '<'
            },
            controller: PersonDetailController
        });

    PersonDetailController.$inject = ['$window'];

    function PersonDetailController($window) {

        //////// View Model ////////

        var ctrl = this;
        ctrl.openExternalUrl = openExternalUrl;

        //////// Implementation ////////

        function openExternalUrl(url) {
            var win = $window.open(url, '_blank');
            win.focus();
        }
    }
})();