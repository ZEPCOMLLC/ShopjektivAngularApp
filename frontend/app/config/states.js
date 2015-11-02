
angular
    .module('magazin.frontend')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $urlRouterProvider
                .when('/', '/')
                .otherwise('/');
            $stateProvider
                // -- Home Page --
                .state("home", {
                   /* parent : true ,*/
                    url: "",
                    templateUrl: 'app/views/home.html',
                    controller:'homeController'
                })


        }
    ]);
