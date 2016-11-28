(function() {
    'use strict';

    angular.module('app.navigation')
        .component('hyfMainToolbar', {
            templateUrl: '/navigation/main-toolbar.template.html',
            bindings: {
                title: '<',
                openSideNav: '&'
            },
            controller: MainToolbarController
        });

    MainToolbarController.$inject = ['$window'];

    function MainToolbarController($window) {

        //////// View Model ////////

        var vm = this;
        vm.openMenu = openMenu;
        vm.visitMainSite = visitMainSite;

        //////// Implementation ////////

        function openMenu($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        }

        function visitMainSite() {
            var win = $window.open('http://www.hackyourfuture.net/', '_blank');
            win.focus();
        }
    }

})();