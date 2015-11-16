;'use strict';
angular.module('magazin.frontend.user')
.directive('loginUrl', function() {
    return {
        templateUrl: 'view/login.html'
    };
})
.directive('registerUrl', function() {
    return {
        templateUrl: 'view/register.html'
    };
})
.directive('logoutUrl', function() {
    return {
        templateUrl: 'view/logout.html'
    };
});