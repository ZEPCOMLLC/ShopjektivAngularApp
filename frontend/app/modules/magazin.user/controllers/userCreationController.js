
'use strict';

angular.module('magazin.frontend.user')
    .controller('userCreationController', [
        '$scope',
        '$rootScope',
        '$location',
        'Roles',
        'RolesService',
        'UserAuth',
        'UserService',
        'utils',
        function ($scope,$rootScope, $location,Roles,RolesService,Auth,UserService,utils) {

            $scope.addUser  = {};

            $scope.roles = Roles.roles;

            RolesService.getRoles(Auth.apiKey).then(function(response) {
                //console.log(res);
                if (response.error == true) {
                    console.log('wrong data...');
                }
                else {
                    $scope.rolesData = response.data;

                }
            });

            // serialize form on submit
            $scope.submitForm = function($event) {
                $event.preventDefault();
                var form_serialized = JSON.stringify( utils.serializeObject($('#user_edit_form')), null, 2 );
                UIkit.modal.alert('<p>User data:</p><pre>' + form_serialized + '</pre>');
               /* var user = {
                    email: email,
                    name:name,
                    password:password
                };*/

                console.log(form_serialized);

                UserService.createUser(Auth.apiKey,$scope.addUser).then(function(response) {
                    //console.log(res);
                    if (response.error == true) {
                        console.log('wrong data...');
                    }
                    else {
                        console.log(response);

                    }
                });

            }

            // callback for ng-click 'deleteUser':
            $scope.createUser = function (name,email,password) {

            };




        }])