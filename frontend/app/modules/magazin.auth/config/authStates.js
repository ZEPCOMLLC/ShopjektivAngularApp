'use strict';

angular
    .module('magazin.frontend.auth')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $urlRouterProvider
                .when('/', '/')
                .otherwise('/');
            $stateProvider
                .state("login", {
                    /* parent : true ,*/
                    url: "/login",
                    templateUrl: 'app/modules/magazin.auth/views/auth.html',
                    controller:'authController'
                });
        }
    ]);
