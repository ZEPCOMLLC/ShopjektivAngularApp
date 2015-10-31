magazin.user
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $urlRouterProvider
                .when('/dashboard', '/')
                .otherwise('/');

            $stateProvider
            // -- ERROR PAGES --
                .state("error", {
                    url: "/error",
                    templateUrl: 'app/views/error.html'
                })
                .state("error.404", {
                    url: "/404",
                    templateUrl: 'app/components/pages/error_404View.html'
                })
                .state("error.500", {
                    url: "/500",
                    templateUrl: 'app/components/pages/error_500View.html'
                })
            // -- Login --
                .state("login", {
                    url: "/login",
                    templateUrl: 'user/view/login.html',
                    controller: 'controllers/LoginController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_iCheck',
                                'app/modules/user/controllers/loginController.js'
                            ]);
                        }]
                    }
                })
         
           // -- Register  --

				.state("register", {
                    url: "/regster",
                    templateUrl: 'user/view/register.html',
                    controller: 'controllers/RegisterController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_iCheck',
                                'app/modules/user/controllers/registerController.js'
                            ]);
                        }]
                    }
                })
			// -- Logout  --

				.state("logout", {
                    url: "/logout",       
                    controller: 'controllers/LogoutController'           
                })
        }
    ]);
