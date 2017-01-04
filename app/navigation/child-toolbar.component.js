(function() {
    'use strict';

    angular.module('app.navigation')
        .component('hyfChildToolbar', {
            templateUrl: '/app/navigation/child-toolbar.component.html',
            bindings: {
                title: '<',
                parentState: '@'
            },
            controller: ChildToolbarController
        });

    ChildToolbarController.$inject = ['$state'];

    function ChildToolbarController($state) {

        var ctrl = this;
        ctrl.goBack = goBack;

        function goBack() {
            $state.go(this.parentState)
        }
    }

})();