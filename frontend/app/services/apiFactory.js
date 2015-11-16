angular
    .module('magazin.frontend')
    .factory('api', function ($http, $cookies) {
    return {
        init: function (token) {
            $http.defaults.headers.common['X-Access-Token'] = token || $cookies.token;
        }
    };
    })
/*    .factory('httpInterceptor',['$q','$window','$location',function($q, $window, $location) {
        return function (promise) {
            var success = function (response) {
                return response;
            };

            var error = function (response) {
                if (response.status === 401) {
                    $location.url('/login');
                }

                return $q.reject(response);
            };

            return promise.then(success, error);
        };
    }])*/
    .factory('authInterceptor', function ($rootScope, $q, $window,$location) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers.Authorization = $window.sessionStorage.token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    // handle the case where the user is not authenticated
                    $location.path('/login');
                }
                return response || $q.when(response);
            }
        };
    });