
'use strict';

angular.module('magazin.frontend.user')

    .controller('userDetailController', [
        '$scope',
        '$rootScope',
        'UserFactory',
        '$location',
        'utils',
        'Roles',
        function ($scope,$rootScope,UserFactory, $location,utils,Roles) {

            $scope.user  = {
                active: true,
                name:'asisha'
            };
            $scope.user_role_options_group = [];
            $scope.roles = Roles.roles;

          /*  angular.forEach($scope.roles, function(value) {
                $scope.user_role_options_group.push(value);
            });*/

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

            // callback for ng-click 'cancel':
            $scope.cancel = function () {
                $location.path('/user-list');
            };

           /// $scope.user = UserFactory.show({id: $routeParams.id});

        }])