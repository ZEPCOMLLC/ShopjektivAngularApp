'use strict';

    angular
        .module('magazin.user', ['ngRoute', 'ngCookies'])
        .run(run);
    run.$inject = ['$rootScope','$state','$stateParams','$location', '$cookieStore','$window','$timeout','$http'];
    function run($rootScope, $state,$stateParams,$location, $cookieStore, $http,$timeout,$window) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
		$rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;


		 $rootScope.$on('$stateChangeSuccess', function () {
             
                $timeout(function() {
                    $rootScope.pageLoading = false;
                    $($window).resize();
                },300);

                $timeout(function() {
                    $rootScope.pageLoaded = true;
                },600);

            });

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
		//set enable state section in each module 
		$rootScope.$on('$stateChangeStart', function () {
                // main search
                $rootScope.mainSearchActive = false;
                // single card
                $rootScope.headerDoubleHeightActive = false;
                // top bar
                $rootScope.toBarActive = false;
                // full height
                $rootScope.page_full_height = false;
                // secondary sidebar
                $rootScope.sidebar_secondary = false;
                $rootScope.secondarySidebarHiddenLarge = false;

                if($($window).width() < 1220 ) {
                    $rootScope.primarySidebarActive = false;
                    $rootScope.hide_content_sidebar = false;
                }

                $rootScope.pageLoading = true;
                $rootScope.pageLoaded = false;
				 // show/hide main menu on page load
                $rootScope.primarySidebarOpen = false;

            });

    }

