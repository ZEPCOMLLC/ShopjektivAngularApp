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

})
    .directive('confirm', function() {
        return {
            priority: 100,
            restrict: 'A',
            link: {
                pre: function (scope, element, attrs) {
                    var msg = attrs.confirm || "Are you sure?";

                    element.bind('click', function (event) {
                        if (!confirm(msg)) {
                            event.stopImmediatePropagation();
                            event.preventDefault;
                        }
                    });
                }
            }
        };

    });