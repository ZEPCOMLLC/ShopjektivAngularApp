angular
    .module('magazin.frontend.product')
    .controller('products_gridController', [
        '$scope',
        '$rootScope',
        'products_data',
        function ($scope,$rootScope,products_data) {

            // products data
            $scope.products_data = products_data;

        }
    ])
;