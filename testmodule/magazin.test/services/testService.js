angular
    .module('magazin.frontend.test')
    .service('TestService', function TestService($http){

        var service = {};
        service.testing = function (token) {

            return $http({
                url: 'path of server',
                method: "GET",
                headers: {
                    'Api-Key': token
                }
            }).then(function (results) {
                return results.data;
            });
        };


            return $http({
                url: '../api/v1/role/',
                method: "POST",
                headers: {
                    'Api-Key': token
                }
            }).then(function (results) {
                return results.data;
            });
        };

        return service;
    });