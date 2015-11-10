'use strict';

angular
    .module('magazin.frontend')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $urlRouterProvider
              .when('/dashboard', '/')
             .otherwise('/');
            $stateProvider
                // -- RESTRICTED --
                .state("restricted", {
                    abstract: true,
                    url: "",
                    views: {
                        'main_header': {
                            templateUrl: 'app/views/headerView.html',
                            controller: 'main_headerController'
                        },
                        'main_sidebar': {
                            templateUrl: 'app/views/main_sidebarView.html',
                            controller: 'main_sidebarController'
                        },
                        '': {
                            templateUrl: 'app/views/restricted.html'
                        }
                    }
                  ,
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_selectizeJS',
                                'lazy_switchery',
                                'lazy_prismJS',
                                'lazy_autosize',
                                'lazy_iCheck',
                                'lazy_style_switcher'
                            ],{ serie: true });
                        }]
                    }
                })
              // -- DASHBOARD --
                .state("restricted.dashboard", {
                    url: "/",
                    templateUrl: 'app/views/dashboardView.html',
                    controller: 'dashboardController',

                    data: {
                        pageTitle: 'Dashboard'
                    }

                })
        }
]);
