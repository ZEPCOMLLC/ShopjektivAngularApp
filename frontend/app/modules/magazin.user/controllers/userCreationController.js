
'use strict';

angular.module('magazin.frontend.user')

    .controller('userCreationController', ['$scope', 'UserFactory', '$location',
        function ($scope, UserFactory, $location) {

            // callback for ng-click 'createNewUser':
            $scope.createNewUser = function () {
                UsersFactory.create($scope.user);
                $location.path('/user-list');
            }
        }])