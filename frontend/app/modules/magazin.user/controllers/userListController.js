
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
.controller('userListController', [
        '$scope',
        '$rootScope',
        '$location',
        'UsersFactory',
        'UserService',
        'UserAuth',
        function ($scope,$rootScope, $location,UsersFactory,UserService,Auth) {


            $scope.usersData = {};
           // $scope.userData =User;

            $scope.pageSize = 10;

            $scope.filter_role_options = [
                {
                    value: '',
                    title: 'All'
                },
                {
                    value: 'admin',
                    title: 'Admin'
                },
                {
                    value: 'super_admin',
                    title: 'Super Admin'
                },
                {
                    value: 'customer',
                    title: 'Customer'
                }
            ];

            $scope.filter_role_config = {
                create: false,
                valueField: 'value',
                labelField: 'title',
                placeholder: 'Role...'
            };

            $scope.filterData = {
                status: ["admin","customer","customer"]
            };

            $scope.filter_pageSize = ['5', '10', '15'];

            console.log(Auth.apiKey);
          //  $scope.users = UsersFactory.query({'Api-Key': Auth.apiKey});


            //get all users list
            UserService.userGet(Auth.apiKey).then(function(response) {
                //console.log(res);
                if (response.error == true) {
                    console.log('wrong data...');
                }
                else {
                    $scope.usersData = response.data;
                    console.log($scope.usersData);

                }
            });
            $scope.getUser = function () {

               // $location.path('/user-detail/' + userId);
            };
            // callback for ng-click 'editUser':
            $scope.editUser = function (userId) {
                $location.path('/user-detail/' + userId);
            };

            // callback for ng-click 'deleteUser':
            $scope.deleteUser = function (userId) {
               //serFactory.delete({ id: userId });
               //scope.users = UsersFactory.query();
            };

            // callback for ng-click 'createUser':
            $scope.createNewUser = function () {
                $location.path('/user-creation');
            };

           //scope.users = UsersFactory.query();
        }])