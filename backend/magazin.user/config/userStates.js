'use strict';

angular
    .module('magazin.frontend.user')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $stateProvider
                .state("user", {
                    /* parent : true ,*/
                    url: "/user",
                    templateUrl: 'app/modules/magazin.user/views/userView.html',
                    controller:'userController'
                });
        }
    ]);
