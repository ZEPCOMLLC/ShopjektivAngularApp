'use strict';

angular
    .module('magazin.frontend')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$httpProvider',
        function ($stateProvider, $urlRouterProvider,$httpProvider) {
            //$httpProvider.responseInterceptors.push('httpInterceptor');
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
                    data: {
                        //child states of this route would also required requiredLogin
                        requireLogin: true
                    },
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
                // -- UserModule --
                .state("restricted.user", {
                    url: "/user",
                    template: '<ui-view autoscroll="false"/>',
                    abstract: true

                })
                .state("restricted.user.list", {
                    url: "/list",
                    templateUrl: 'app/modules/magazin.user/views/userListView.html',
                    controller: 'userListController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'app/modules/magazin.user/controllers/userListController.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'User List'
                        //requireLogin: true

                    }
                })

                .state("restricted.user.create", {
                    url: "/create",
                    templateUrl: 'app/modules/magazin.user/views/userCreateView.html',
                    controller: 'userCreationController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'app/modules/magazin.user/controllers/userCreationController.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'User Create'
                        //requireLogin: true

                    }
                })
                .state("restricted.user.detail", {
                    url: "/detail",
                    templateUrl: 'app/modules/magazin.user/views/userDetailView.html',
                    controller: 'userDetailController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'app/modules/magazin.user/controllers/userDetailController.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'User Detail'
                      //  requireLogin: true

                    }
                })
                .state("restricted.user.edit", {
                    url: "/edit",
                    templateUrl: 'app/modules/magazin.user/views/userEditView.html',
                    controller: 'userDetailController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'app/modules/magazin.user/controllers/userDetailController.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'User Edit'
                        //requireLogin: true

                    }
                })
                // -- E-COMMERCE --
                .state("restricted.ecommerce", {
                    url: "/ecommerce",
                    template: '<ui-view autoscroll="false"/>',
                    abstract: true
                })
                .state("restricted.ecommerce.product_details", {
                    url: "/product_details",
                    templateUrl: 'app/modules/ecommerce/product_detailsView.html',
                    controller: 'productCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'app/modules/ecommerce/productController.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'Product Details'
                    }
                })
                .state("restricted.ecommerce.product_edit", {
                    url: "/product_edit",
                    templateUrl: 'app/modules/ecommerce/product_editView.html',
                    controller: 'productCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'app/modules/ecommerce/productController.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'Product Edit'
                    }
                })
                .state("restricted.ecommerce.products_list", {
                    url: "/products_list",
                    templateUrl: 'app/modules/ecommerce/products_listView.html',
                    controller: 'products_listCtrl',
                    resolve: {
                        products_data: function($http){
                            return $http({method: 'GET', url: 'data/ecommerce_products.json'})
                                .then(function (data) {
                                    return data.data;
                                });
                        },
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_pagination',
                                'app/modules/ecommerce/products_listController.js'
                            ], { serie: true } );
                        }]
                    },
                    data: {
                        pageTitle: 'Products List'
                    }
                })


        }
]);
