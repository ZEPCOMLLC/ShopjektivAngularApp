  'use strict';

  angular.module('magazin.permission', ['ui.router'])
    .run(['$rootScope', 'Permission', '$state', '$q',
    function ($rootScope, Permission, $state, $q) {
      $rootScope.$on('$stateChangeStart',
      function (event, toState, toParams, fromState, fromParams) {
        if (toState.$$finishAuthorize) {
          return;
        }

        // If there are permissions set then prevent default and attempt to authorize
        var permissions;
        if (toState.data && toState.data.permissions) {
          permissions = toState.data.permissions;
        } else if (toState.permissions) {
       
          permissions = toState.permissions;
        }

        if (permissions) {
          event.preventDefault();
          toState = angular.extend({'$$finishAuthorize': true}, toState);

          if ($rootScope.$broadcast('$stateChangePermissionStart', toState, toParams).defaultPrevented) {
            return;
          }

          Permission.authorize(permissions, toParams).then(function () {
            if (!$rootScope.$broadcast('$stateChangeStart', toState, toParams, fromState, fromParams).defaultPrevented) {
              $rootScope.$broadcast('$stateChangePermissionAccepted', toState, toParams);

              $state.go(toState.name, toParams, {notify: false}).then(function() {
                $rootScope
                  .$broadcast('$stateChangeSuccess', toState, toParams, fromState, fromParams);
              });
            }
          }, function () {
            if (!$rootScope.$broadcast('$stateChangeStart', toState, toParams, fromState, fromParams).defaultPrevented) {
              $rootScope.$broadcast('$stateChangePermissionDenied', toState, toParams);

              var redirectTo = permissions.redirectTo;
              var result;

              if (angular.isFunction(redirectTo)) {
                redirectTo = redirectTo();

                $q.when(redirectTo).then(function (newState) {
                  if (newState) {
                    $state.go(newState, toParams);
                  }
                });

              } else {
                if (redirectTo) {
                  $state.go(redirectTo, toParams);
                }
              }
            }
          });
        }
      });
    }]);