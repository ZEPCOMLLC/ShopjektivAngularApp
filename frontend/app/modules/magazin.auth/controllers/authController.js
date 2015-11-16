angular
    .module('magazin.frontend.auth')
    .controller('authController', [
        '$scope',
        '$rootScope',
        'utils',
        '$window',
        '$state',
        '$http',
        'authenticationService',
        '$cookies',
        'api',
        function ($scope,$rootScope,utils,$window,$state,$http,authService,$cookies,api) {

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

            $scope.doLogin = function() {
               // $event.preventDefault();*/
                authService.auth('login',$scope.login).then(function(response) {
                    //console.log(res);
                    if(response.error == true)
                    {
                        console.log('wrong authentication...');
                    }
                    else
                    {
                       //console.log(response);
                        api.init(response.api_key);
                        $window.sessionStorage.userName = response.user_name;
                        $window.sessionStorage.token = response.api_key;
                        $window.sessionStorage.role = response.role_id;
                        $window.sessionStorage.isLogged = true;
                        $rootScope.userName =  $window.sessionStorage.userName
                        $state.go('restricted.dashboard');
                    }



                });

            };
            $scope.logout = function () {
                $window.sessionStorage.clear();
                $state.go('login');
            }
            $scope.validate = function(obj){};

            $scope.loginHelp = function($event) {
                $event.preventDefault();
                utils.card_show_hide($login_card,undefined,login_help_show,undefined);
                /*$state.go('dashboard');*/
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

