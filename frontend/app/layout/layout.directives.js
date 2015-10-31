
/**
 * pageTitle - Directive for set Page title - mata title
 */
function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title
                var title = 'KRAPP MAGAZIN';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'KRAPP MAGAZIN | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
};




/**
 *
 * Pass all functions into module
 */
angular
    .module('magazin.frontend')
    .directive('pageTitle', pageTitle)
    
