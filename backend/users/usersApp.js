angular.module('magazin.frontend.users', [
    'ui.router',
    'oc.lazyLoad',
    'ngSanitize',
    'ngAnimate',
    'ngRetina',
    'ConsoleLogger',
]);
angular.module('magazin.frontend.users')
    .run([
        'PrintToConsole',
        function(PrintToConsole) {
            // app debug
            PrintToConsole.active = false;
        }
    ])
