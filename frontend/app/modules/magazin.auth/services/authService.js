;
'use strict';

angular
    .module('magazin.frontend.auth')
    .service('apiConnector', function apiConnector($http) {

        var apiBase = '../api/v1/';

        var obj = {};

        obj.get = function (q) {
            return $http.get(apiBase + q).then(function (results) {
                return results.data;
            });
        };
        obj.post = function (q, object) {
            console.log(object);
            return $http.post(apiBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.put = function (q, object) {
            return $http.put(apiBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.delete = function (q) {
            return $http.delete(apiBase + q).then(function (results) {
                return results.data;
            });
        };

        return obj;

    }).
     service('authenticationService', function userService($http) {

        var apiBase = '../api/v1/';

        var obj = {};
        obj.auth = function (q, user) {

            return $http({
                url: '../api/v1/login',
                method: "POST",
                data: {
                    email: user.email,
                    password: user.password

                }
            }).then(function (results) {
                return results.data;
            });
        };
        obj.registerUser = function (q, user) {

            return $http({
                url: '../api/v1/register',
                method: "POST",
                data: {
                    email: user.email,
                    password: user.password

                }
            }).then(function (results) {
                return results.data;
            });
        };

        return obj;
    })
