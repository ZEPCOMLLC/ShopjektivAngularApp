'use strict';

    angular
        .module('magazin.frontend.user')
        .factory('UserService', UserService);

    UserService.$inject = ['$http','variables'];
    function UserService($http,variables) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

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
                url: apiUrl,
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
                    'name': user.name,
                    'email': user.name,
                    'password': user.name

                }
            }).then(function (results) {
                return results.data;
            });
        };

        return service;

        function GetAll() {
            return $http.get('../api/v1/user/').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user) {
            return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

