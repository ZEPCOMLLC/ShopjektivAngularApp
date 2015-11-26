
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
        '$state',
        function ($scope,$rootScope, $location,UsersFactory,UserService,Auth,$state) {


            $scope.usersList = [];
            $scope.message = '';
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
                    $scope.usersList = response.data;
                    console.log($scope.usersList);

                }
            });
            $scope.getUser = function () {

               // $location.path('/user-detail/' + userId);
            };
            // callback for ng-click 'editUser':
            $scope.editUser = function (userId) {
               // $location.path('/user-detail/' + userId);
                UserService.getUserDetail(userId,Auth.apiKey).then(

                    function(response) {
                        $rootScope.userDetailObj = response.data;
                        $scope.message = response.data.message;
                        console.log('success');
                        console.log(response.data);
                       // $state.go('restricted.user.detail');
                        $state.go('restricted.user.detail', {'Id': userId});
                       // $state.go('restricted.user.edit', {'Id': userId});
                    },
                    function (response) {
                        //do error handling here
                        $scope.message = response.data.message;
                        console.log('error');
                        console.log(response);
                    }
                );
            };
            $scope.deleteUser = function (userId) {
                // $location.path('/user-detail/' + userId);
                UserService.deleteUser(Auth.apiKey,userId).then(

                    function(response) {
                        $scope.message = response.message;
                        console.log('success');
                        console.log(response.data);
                        $state.reload();
                    },
                    function (response) {
                        //do error handling here
                        $scope.message = response.data.message;
                        console.log('error');
                        console.log(response);
                    }
                );
            };
        }])