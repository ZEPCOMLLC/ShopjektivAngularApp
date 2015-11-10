'use strict';

angular
    .module('magazin.frontend.user')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $stateProvider
                .state("users", {
                    /* parent : true ,*/
                    url: "/user",
                    templateUrl: 'app/modules/magazin.user/views/userListView.html',
                    controller:'authController'
                });
            $stateProvider
                // -- RESTRICTED --
                .state("user", {
                    abstract: true,
                    url: "",
                    templateUrl: 'app/modules/magazin.auth/view"
                    }
                })

        }
    ]);
