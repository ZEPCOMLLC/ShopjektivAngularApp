 'use strict';
    angular
        .module('magazin.user')
        .controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$location'];
    function LogoutController($location) {
        /*var vm = this;*/
        Session.clear();
        $location.path('/login');
    }
})();