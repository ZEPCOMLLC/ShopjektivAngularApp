
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

            $scope.user  = {};
            $scope.userId = $stateParams.Id;
            $scope.user_role_options_group = [];
            $scope.roles = [];
            $scope.selected =

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



                    console.log($scope.user_role_options_group);
                    console.log($scope.user);


                }
            });





            // serialize form on submit
            $scope.submitForm = function($event) {
                $event.preventDefault();
                var form_serialized = JSON.stringify( utils.serializeObject($('#user_edit_form')), null, 2 );
                UIkit.modal.alert('<p>User data:</p><pre>' + form_serialized + '</pre>');
            }
            // callback for ng-click 'updateUser':
            $scope.updateUser = function () {
                UserFactory.update($scope.user);
                $location.path('/user-list');
            };

          //  console.log( $stateParams.Id);

             UserService.getUserDetail($scope.userId,Auth.apiKey).then(function(response) {
                    //console.log(res);
                    if (response.error == true) {
                        console.log('wrong data...');
                    }
                    else {
                        $scope.user = response.data;
                        console.log( $scope.user);

                    }
             });



            // callback for ng-click 'cancel':
            $scope.cancel = function () {
                $location.path('/user-list');
            };

           /// $scope.user = UserFactory.show({id: $routeParams.id});

        }])