

define(function(){

    return function(module){

        module.directive('tcFramedataTable', function(){

            return {
                restrict: 'E',
                templateUrl: 'application/components/framedata-table/framedata-table.html',
                controller: FramedataTableController,
                scope: {
                    attackSet: '=',
                    selectedAttack: '='
                }
            }

            FramedataTableController.$inject = ['$scope'];

            function FramedataTableController($scope){

                $scope.selectAttack = function(key){
                    $scope.selectedAttack = $scope.attackSet[key];
                    $scope.active = key;
                }
            }
        });
    }
});