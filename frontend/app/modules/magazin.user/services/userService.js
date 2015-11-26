'use strict';

    angular
        .module('magazin.frontend.user')
        .factory('UserService', UserService);

    UserService.$inject = ['$http','variables'];
    function UserService($http,variables) {
        var service = {};

        var apiUrl=variables.apiBaseUrl+'user/'

        service.userGet = function (token) {

            return $http({
                url: apiUrl,
                method: "GET",
                headers: {
                    'Api-Key': token
                }
            }).then(function (results) {
                return results.data;
            });
        };

        service.getUserDetail = function(id,token){
            return $http({
                url: apiUrl+id,
                method: "GET",
                headers: {
                    'Api-Key': token
                },
                params: {id: id}
            }).then(function (results) {
                return results.data;
            });
        };
        service.createUser = function (token,user) {

            return $http({
                url: apiUrl,
                method: "POST",
                headers: {
                    'Api-Key': token
                },
                data: {
                    'name': user.user_add_name_control,
                    'email': user.user_add_email_control,
                    'password': user.user_add_password_control,
                     'role':user.user_add_role_control

                }
            }).then(function (results) {
                return results.data;
            });
        };
        service.editUser = function (token,user,id) {

            return $http({
                url: apiUrl+id,
                method: "PUT",
                headers: {
                    'Api-Key': token
                },
                params: {id: id},
                data: {
                    'name': user.user_edit_name_control,
                    'email': user.user_edit_email_control,
                    'password': user.user_edit_password_control,
                    'role':user.user_edit_role_control ,
                    'active':user.user_edit_active_control


                }
            }).then(function (results) {
                return results.data;
            });
        };
        service.deleteUser = function (token,id) {

            return $http({
                url: apiUrl+id,
                method: "DELETE",
                headers: {
                    'Api-Key': token
                },
                params: {id: id}

            }).then(function (results) {
                return results.data;
            });
        };

        return service;

    }

