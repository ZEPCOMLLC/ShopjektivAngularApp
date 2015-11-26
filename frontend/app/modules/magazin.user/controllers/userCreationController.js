
'use strict';

angular.module('magazin.frontend.user')
    .controller('userCreationController', [
        '$scope',
        '$rootScope',
        '$state',
        '$location',
        'Roles',
        'RolesService',
        'UserAuth',
        'UserService',
        'utils',
        '$window',
        function ($scope,$rootScope,$state,$location,Roles,RolesService,Auth,UserService,utils,$window) {

            $scope.addUser  = {};
            $scope.message = '';

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
            $scope.createUser = function($event) {
                $event.preventDefault();
                var form_serialized = JSON.stringify( utils.serializeObject($('#user_edit_form')), null, 2 );
               // UIkit.modal.alert('<p>User data:</p><pre>' + form_serialized + '</pre>');
                var user = JSON.parse(form_serialized);
                UserService.createUser($window.sessionStorage.token,user).then(
                    function(response) {
                        $scope.message = response.data.message;
                        console.log('success');
                        $state.go('restricted.user.list');
                },
                    function (response) {
                        //do error handling here
                        $scope.message = response.data.message;
                        console.log('error');
                        console.log(response);
                    }

                );

            }

        }])