angular
    .module('magazin.frontend')
    .directive('styleSwitcher', function ($rootScope,$document,$state,$timeout) {
        return {
            restrict: 'E',
            templateUrl : 'app/views/style_switcher.html',
            controller: function($scope) {

                $scope.themes = [
                    {
                        name: "app_style_default",
                        class: "default_theme"
                    },
                    {
                        name: "switcher_theme_a",
                        class: "app_theme_a"
                    },
                    {
                        name: "switcher_theme_b",
                        class: "app_theme_b"
                    },
                    {
                        name: "switcher_theme_c",
                        class: "app_theme_c"
                    },
                    {
                        name: "switcher_theme_d",
                        class: "app_theme_d"
                    },
                    {
                        name: "switcher_theme_e",
                        class: "app_theme_e"
                    },
                    {
                        name: "switcher_theme_f",
                        class: "app_theme_f"
                    },
                    {
                        name: "switcher_theme_h",
                        class: "app_theme_h"
                    }
                ];

            },
            link: function (scope, elem, attr) {

                scope.toggleStyleSwitcher = function($event) {
                    $event.preventDefault();
                    $rootScope.styleSwitcherActive = !$rootScope.styleSwitcherActive;
                };

                scope.changeTheme = function($event,theme) {
                    $event.preventDefault();
                    var $this = $($event.currentTarget);

                    $this
                        .addClass('active_theme')
                        .siblings().removeClass('active_theme');

                    $rootScope.main_theme = theme.class;

                    if(theme.class == '') {
                        localStorage.removeItem('altair_theme');
                    } else {
                        localStorage.setItem("altair_theme", theme.class);
                    }
                };

                scope.mini_sidebar_toggle = false;

                // change input's state to checked if mini sidebar is active
                if((localStorage.getItem("altair_sidebar_mini") !== null && localStorage.getItem("altair_sidebar_mini") == '1')) {
                    $rootScope.miniSidebarActive = true;
                    scope.mini_sidebar_toggle = true;
                }

                // toggle mini sidebar
                $('#style_sidebar_mini')
                    .on('ifChecked', function(event){
                        localStorage.setItem("altair_sidebar_mini", '1');
                        $rootScope.styleSwitcherActive = false;
                        $timeout(function() {
                            $rootScope.miniSidebarActive = true;
                            $state.go($state.current, {}, {reload: true});
                        })
                    })
                    .on('ifUnchecked', function(event){
                        localStorage.removeItem('altair_sidebar_mini');
                        $rootScope.styleSwitcherActive = false;
                        $timeout(function() {
                            $rootScope.miniSidebarActive = false;
                            $state.go($state.current, {}, {reload: true});
                        })
                    });

                if(localStorage.getItem("altair_theme") !== null) {
                    $rootScope.main_theme = localStorage.getItem("altair_theme");
                } else {
                    $rootScope.main_theme = "default_theme"
                }

            }
        };
    })
;