(function() {
    'use strict';

    angular.module('app.navigation')
        .component('hyfChildToolbar', {
            templateUrl: '/navigation/child-toolbar.template.html',
            bindings: {
                title: '<',
                parentState: '@'
            },
            controller: ChildToolbarController
        });

    ChildToolbarController.$inject = ['$state'];

    function ChildToolbarController($state) {

        //////// View Model ////////

        var vm = this;
        vm.goBack = goBack;

        //////// Implementation ////////

        function goBack() {
            $state.go(this.parentState)
        }

    }

})();