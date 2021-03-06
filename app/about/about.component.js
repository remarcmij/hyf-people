(function() {
    'use strict';

    angular.module('app.about')
        .component('hyfAbout', {
            templateUrl: '/app/about/about.component.html',
            controller: AboutController
        });

    AboutController.$inject = ['appTitle'];

    function AboutController(appTitle) {
        var ctrl = this;
        ctrl.appTitle = appTitle;
    }
})();