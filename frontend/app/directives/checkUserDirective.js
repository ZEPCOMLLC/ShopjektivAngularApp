
;'use strict';

angular
    .module('magazin.frontend')
    .directive('checkUser', ['$rootScope', '$location', 'UserAuth',
        function ($rootScope, $location, userAuth) {
            return {
                link: function (scope, elem, attrs, ctrl) {
                    $rootScope.$on('$routeChangeStart', function(e, curr, prev){
                        if (!prev.access.isFree && !userAuth.isLogged) {
                            // reload the login route
                            $location.path('/login');
                        }
                        /*
                         * IMPORTANT:
                         * It's not difficult to fool the previous control,
                         * so it's really IMPORTANT to repeat server side
                         * the same control before sending back reserved data.
                         */
                    });
                }
            }
        }]);
