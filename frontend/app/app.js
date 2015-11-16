

angular.module('magazin.frontend', [
    'ui.router',
    'oc.lazyLoad',
    'ngCookies',
    'ngSanitize',
    'magazin.frontend.roles',
    'pascalprecht.translate',
    'magazin.frontend.auth',
    'magazin.frontend.user',
    'magazin.frontend.product']);

angular.module('magazin.frontend')
    .run([
        '$rootScope',
        '$stateParams',
        '$state',
        '$http',
        '$window',
        '$timeout',
        'variables',
        '$location',
        'UserAuth',
        function ($rootScope,$stateParams, $state, $http,$window, $timeout,variables,$location,User ) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$on('$stateChangeSuccess', function () {

                // scroll view to top
                $("html, body").animate({
                    scrollTop: 0
                }, 200);

                $timeout(function() {
                    $rootScope.pageLoading = false;
                    $($window).resize();
                },300);

                $timeout(function() {
                    $rootScope.pageLoaded = true;
                },600);


            });

            $rootScope.$on('$stateChangeStart', function (event,toState,toParams) {
                // check access require login
                //var requireLogin = $state.data.requireLogin;

                if(toState.name == "restricted.dashboard" && !$window.sessionStorage.isLogged) {
                    /*$state.go('login');*/
                    $location.path('/login');

                }
                else if(toState.name == "login" && $window.sessionStorage.isLogged) {
                    console.log('yesitssss');
                   // $state.go('restricted.dashboard');
                    $location.path('/dashboard');
                   /* event.preventDefault();
                    return*/
                }
                else {
                    console.log(toState);
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

                    if ($($window).width() < 1220) {
                        $rootScope.primarySidebarActive = false;
                        $rootScope.hide_content_sidebar = false;
                    }

                    $rootScope.pageLoading = true;
                    $rootScope.pageLoaded = false;
                }


            });

            // fastclick (eliminate the 300ms delay between a physical tap and the firing of a click event on mobile browsers)
            FastClick.attach(document.body);

            // modernizr
            $rootScope.Modernizr = Modernizr;

            // get window width
            var w = angular.element($window);

            $rootScope.largeScreen = w.innerWidth >= 1220;

            w.on('resize', function() {
                return $rootScope.largeScreen = w.innerWidth >= 1220;
            });

            // show/hide main menu on page load
            $rootScope.primarySidebarOpen = ($rootScope.largeScreen) ? true : false;
            $rootScope.pageLoading = true;

           // console.log(User);



        }
    ])
    .run(['api',function(api){
        api.init();
    }])
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    })
    .run([
        'PrintToConsole',
        function(PrintToConsole) {
            // app debug
            PrintToConsole.active = false;
        }
    ])

