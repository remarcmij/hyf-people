(function() {
    'use strict';

    angular.module('app.about')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['appTitle'];

    function AboutController(appTitle) {
        var vm = this;

        vm.appTitle = appTitle;
    }
})();