
'use strict';

angular.module('magazin.frontend.user')

    .controller('userDetailController', [
        '$scope',
        '$rootScope',
        '$stateParams',
        'UserFactory',
        '$location',
        'utils',
        'RolesService',
        'UserService',
        'UserAuth',
        function ($scope,$rootScope,$stateParams,UserFactory, $location,utils,RolesService,UserService,Auth) {

            $scope.user  =  {}
            $scope.userId = $stateParams.Id;
            $scope.user_role_options_group = [];
            $scope.roles = [];
            //$scope.selected =

            UserService.getUserDetail( $scope.userId,Auth.apiKey).then(

                function(response) {
                    $scope.user = response.data;
                    $scope.message = response.data.message;
                    console.log('success');
                    console.log(response.data);
                    // $state.go('restricted.user.edit', {'Id': userId});
                },
                function (response) {
                    //do error handling here
                    $scope.message = response.data.message;
                    console.log('error');
                    console.log(response);
                }
            );

            RolesService.getRoles(Auth.apiKey).then(function(response) {
                //console.log(res);
                if (response.error == true) {
                    console.log('wrong data...');
                }
                else {
                    $scope.roles = response.data;
                   // console.log( $scope.roles);
                    angular.forEach($scope.roles, function(value, key) {
                        $scope.user_role_options_group.push(value.name);
                    });



                   /* console.log($scope.user_role_options_group);
                    console.log($scope.user);*/


                }
            });
            // serialize form on submit
            $scope.updateUser = function($event) {
                $event.preventDefault();
                var form_serialized = JSON.stringify( utils.serializeObject($('#user_edit_form')), null, 2 );
               // UIkit.modal.alert('<p>User data:</p><pre>' + form_serialized + '</pre>');
                var user = JSON.parse(form_serialized);
                if(user.user_edit_active_control == 'on')
                {
                    user.user_edit_active_control = 1;
                }
                else{
                    user.user_edit_active_control = 0;
                }

                UserService.editUser(Auth.apiKey,user,$scope.userId).then(


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
            $scope.checkStatus= function(active) {

               if(active = 1)
               {
                   $scope.selected = true;
               }
               else {
                   $scope.selected = true;
               }
                return $scope.selected;
            };


        }])