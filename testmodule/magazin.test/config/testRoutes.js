'use strict';
angular
    .module('magazin.frontend.user')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $stateProvider
                // -- RESTRICTED --
               /* .state("user", {
                    url: "/user",
                    abstract: true

                })
                .state("user.list", {
                    url: "/list",
                    templateUrl: 'app/modules/magazin.user/views/content.html',
                    controller: 'userListController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_parsleyjs',
                                'app/modules/magazin.user/controllers/userListController.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'User List',
                        requireLogin: true

                    }
                })

                .state("restricted.user.create", {
                    url: "/create",
                    templateUrl: 'app/modules/magazin.user/views/userCreateView.html',
                    controller: 'userCreationController',
                    data: {
                        pageTitle: 'User Create',
                        requireLogin: true

                    }
                })
                .state("restricted.user.detail", {
                    url: "/detail",
                    templateUrl: 'app/modules/magazin.user/views/userDetailView.html',
                    controller: 'userDetailController',
                    data: {
                        pageTitle: 'User Detail',
                        requireLogin: true

                    }
                })
                .state("restricted.user.update", {
                    url: "/update",
                    templateUrl: 'app/modules/magazin.user/views/userEditView.html',
                    controller: 'userCreationController',
                    data: {
                        pageTitle: 'User Edit',
                        requireLogin: true

                    }
                })*/
        }
    ]);
