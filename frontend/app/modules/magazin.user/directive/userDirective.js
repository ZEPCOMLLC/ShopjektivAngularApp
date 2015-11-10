var app = angular.module('magazin.user', []);

app.directive('loginUrl', function() {
    return {
        templateUrl: 'view/login.html'
    };
});
app.directive('registerUrl', function() {
    return {
        templateUrl: 'view/register.html'
    };
});
app.directive('logoutUrl', function() {
    return {
        templateUrl: 'view/logout.html'
    };
});