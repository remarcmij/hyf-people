(function() {
    'use strict';

    angular.module('app.navigation')
        .component('hyfMainToolbar', {
            templateUrl: '/app/navigation/main-toolbar.component.html',
            bindings: {
                title: '<',
                openSideNav: '&'
            },
            controller: MainToolbarController
        });

    MainToolbarController.$inject = ['$window'];

    function MainToolbarController($window) {

        var ctrl = this;
        ctrl.openMenu = openMenu;
        ctrl.visitMainSite = visitMainSite;

        function openMenu($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        }

        function visitMainSite() {
            var win = $window.open('http://www.hackyourfuture.net/', '_blank');
            win.focus();
        }
    }

})();