(function () {
    'use strict';

    angular.module('app.navigation')
        .component('hyfSideNav', {
            templateUrl: '/app/navigation/side-nav.component.html',
            bindings: {
                title: '<'
            },
            controller: SideNavController
        });

    SideNavController.$inject = [];

    function SideNavController() {

    }

})();