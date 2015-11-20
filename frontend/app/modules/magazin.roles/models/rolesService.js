angular
    .module('magazin.frontend.roles')
    .service('RolesService', function RolesService($http){

        var service = {};
        service.getRoles = function (token) {

            return $http({
                url: '../api/v1/role/',
                method: "GET",
                headers: {
                    'Api-Key': token
                }
            }).then(function (results) {
                return results.data;
            });
        };

        service.getRoleDetail = function (token) {

            return $http({
                url: '../api/v1/role/',
                method: "GET",
                headers: {
                    'Api-Key': token
                }
            }).then(function (results) {
                return results.data;
            });
        };
        service.updateRole = function (token) {

            return $http({
                url: '../api/v1/role/',
                method: "GET",
                headers: {
                    'Api-Key': token
                }
            }).then(function (results) {
                return results.data;
            });
        };
        service.deleteRole = function (token) {

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
        service.addRole = function (token) {

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