angular.module('magazin.frontend.user', [
    'ui.router',
    'oc.lazyLoad',
    'ngSanitize',
    'ngAnimate',
    'ngRetina'
]);

angular.module('magazin.frontend.user')
    .run(['$rootScope',
        '$stateParams',
        '$state',
        '$cookies',
        '$http',
        '$window',
        '$timeout',
        function ($rootScope,$stateParams, $state, $cookies,$http,$window, $timeout) {

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            console.log('testins');
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
            $rootScope.$on('$stateChangeStart',function (event,toState,toParams) {
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




            });



        }
    ])
