(function() {
    'use strict';

    angular.module('app.about')
        .component('hyfAbout', {
            templateUrl: '/app/about/about.template.html',
            controller: AboutController
        });

    AboutController.$inject = ['appTitle'];

    function AboutController(appTitle) {
        var vm = this;

        vm.appTitle = appTitle;
    }
})();