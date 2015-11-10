
'use strict';

angular.module('magazin.frontend.user')
/*    .controller('userListController', function($scope, $http) {

        $scope.user = {};
        $scope.listUsers = function() {};
        $scope.deleteUser = function (id){};
        $scope.updateUser = function (id){};
        $scope.addUser = function (user){};
        $scope.getUserDetail = function (id){};

        )};*/
.controller('userListController', ['$scope', 'UsersFactory', 'UserFactory', '$location',
        function ($scope, UsersFactory, UserFactory, $location) {

            // callback for ng-click 'editUser':
            $scope.editUser = function (userId) {
                $location.path('/user-detail/' + userId);
            };

            // callback for ng-click 'deleteUser':
            $scope.deleteUser = function (userId) {
                UserFactory.delete({ id: userId });
                $scope.users = UsersFactory.query();
            };

            // callback for ng-click 'createUser':
            $scope.createNewUser = function () {
                $location.path('/user-creation');
            };

            $scope.users = UsersFactory.query();
        }])