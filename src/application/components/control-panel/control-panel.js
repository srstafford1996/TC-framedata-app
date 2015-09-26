//Control Panel Directive Definition

define(function(){

    return function(module){

        module.directive('tcControlPanel', function(){

            return{
                restrict: 'E',
                templateUrl: 'application/components/control-panel/control-panel.html',
                controller: ControlPanelController,
                scope: {
                    currentCharacter: '=currentCharacter',
                    characters: '=',
                    selectedAttack: '='
                }
            }

            ControlPanelController.$inject = ['$scope'];

            function ControlPanelController($scope){

                $scope.minimized = true;

                $scope.toggleMinimize = function(){ $scope.minimized = !$scope.minimized }

                $scope.select_character = function(character){ 
                        $scope.currentCharacter = character; 
                }


            }
        });
    }
});