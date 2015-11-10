angular
    .module('magazin.frontend.user')
    .controller('userController', [
        '$scope',
        '$rootScope',
        'utils',
        'apiConnector',
        '$state',
        function ($scope,$rootScope,utils,apiConnector,$state) {

            $scope.registerFormActive = false;

            var $login_card = $('#login_card'),
                $login_form = $('#login_form'),
                $login_help = $('#login_help'),
                $register_form = $('#register_form'),
                $login_password_reset = $('#login_password_reset');

            // show login form (hide other forms)
            var login_form_show = function() {
                $login_form
                    .show()
                    .siblings()
                    .hide();
            };

            // show register form (hide other forms)
            var register_form_show = function() {
                $register_form
                    .show()
                    .siblings()
                    .hide();
            };

            // show login help (hide other forms)
            var login_help_show = function() {
                $login_help
                    .show()
                    .siblings()
                    .hide();
            };

            // show password reset form (hide other forms)
            var password_reset_show = function() {
                $login_password_reset
                    .show()
                    .siblings()
                    .hide();
            };

            $scope.checkLogin = function() {
               // $event.preventDefault();*/
                apiConnector.post('/api/v1/login', {
                    login: $scope.login
                }).then(function(res) {

                    if (res.status === 'error') {
                        /* $scope.loading = false;*/
                        $scope.btLogin = 'Sign In';

                        /// $scope.addAlert('danger', res.message);
                        console.log('error has come up');
                    }

                    if (res.status === 'success') {

                        //   $scope.addAlert('success', res.message);

                        $timeout(function() {
                            $state.go('dashboard');
                        }, 1000);
                    }

                });


            };

            $scope.loginHelp = function($event) {
                $event.preventDefault();
                utils.card_show_hide($login_card,undefined,login_help_show,undefined);
                /*$state.go('dashboard');*/

                apiConnector.post('api/v1/controllers/auth/login', {
                    login: $scope.login
                }).then(function(res) {

                    if (res.status === 'error') {
                       /* $scope.loading = false;*/
                        $scope.btLogin = 'Sign In';

                       /// $scope.addAlert('danger', res.message);
                        console.log('error has come up');
                    }

                    if (res.status === 'success') {

                     //   $scope.addAlert('success', res.message);

                        $timeout(function() {
                            $state.go('dashboard');
                        }, 1000);
                    }

                });


            };

            $scope.backToLogin = function($event) {
                $event.preventDefault();
                $scope.registerFormActive = false;
                utils.card_show_hide($login_card,undefined,login_form_show,undefined);
            };

            $scope.registerForm = function($event) {
                $event.preventDefault();
                $scope.registerFormActive = true;
                utils.card_show_hide($login_card,undefined,register_form_show,undefined);
            };

            $scope.passwordReset = function($event) {
                $event.preventDefault();
                utils.card_show_hide($login_card,undefined,password_reset_show,undefined);
            };

        }
    ]);

