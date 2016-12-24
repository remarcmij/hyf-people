(function() {
    'use strict';

    angular.module('app.navigation')
        .component('hyfChildToolbar', {
            templateUrl: '/app/navigation/child-toolbar.template.html',
            bindings: {
                title: '<',
                parentState: '@'
            },
            controller: ChildToolbarController
        });

    ChildToolbarController.$inject = ['$state'];

    function ChildToolbarController($state) {

        //////// View Model ////////

        var ctrl = this;
        ctrl.goBack = goBack;

        //////// Implementation ////////

        function goBack() {
            $state.go(this.parentState)
        }

    }

})();