(function() {
    'use strict';

    angular.module('app.navigation')
        .component('hyfSideNav', {
            templateUrl: '/navigation/side-nav.template.html',
            bindings: {
                title: '<'
            },
            controller: SideNavController
        });

    SideNavController.$inject = [];

    function SideNavController() {

    }

})();