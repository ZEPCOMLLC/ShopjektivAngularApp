angular
    .module('altairApp')
    .controller('calendarCtrl', [
        '$scope',
        function ($scope) {


            $scope.$watch("startDate", function(val){
                var maxEndDate = new Date(val);
                maxEndDate.setDate(maxEndDate.getDate() + 14);
                $scope.maxEndDate = maxEndDate;
                delete $scope.endDate;
            });
        }
    ]);