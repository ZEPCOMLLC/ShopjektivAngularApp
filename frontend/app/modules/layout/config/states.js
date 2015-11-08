'use strict';

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
               /* .state("home", {
                   *//* parent : true ,*//*
                    url: "",
                    templateUrl: 'app/views/home.html',
                    controller:'homeController'
                })*/
              /*  .state("login", {
                    *//* parent : true ,*//*
                    url: "/login",
                    templateUrl: 'app/views/home.html',
                    controller:'homeController'
                });*/
            $stateProvider.state("dashboard", {
                    /* parent : true ,*/
                    url: "/dashboard",
                    templateUrl: 'app/views/content.html'
                })


        }
    ]);
