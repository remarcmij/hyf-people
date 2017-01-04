(function () {
    'use strict';

    angular.module('app.people')
        .component('hyfPersonDetail', {
            templateUrl: '/app/people/person-detail.component.html',
            bindings: {
                person: '<'
            },
            controller: PersonDetailController
        });

    PersonDetailController.$inject = ['$window'];

    function PersonDetailController($window) {

        var ctrl = this;
        ctrl.openExternalUrl = openExternalUrl;

        function openExternalUrl(url) {
            var win = $window.open(url, '_blank');
            win.focus();
        }
    }
})();