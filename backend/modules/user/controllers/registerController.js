
    'use strict';

    angular
        .module('magazin.user')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$location'];
    function RegisterController($location) {
        var vm = this;
        vm.error="";
        vm.dataLoading="";
        function register()
        {

        }

    }
})();
