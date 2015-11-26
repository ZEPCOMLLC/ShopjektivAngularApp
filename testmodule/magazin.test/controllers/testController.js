'use strict';
angular
    .module('magazin.frontend.test.controller',[])
    .controller('testController', [
        '$scope',
        '$rootScope',
        'utils',
        function ($scope,$rootScope,utils) {

            $scope.tester = 'Testing';
		}
    ]);
