define(function(){

    return function(module){

        module.directive('tcMain', function(){

            return {
                restrict: 'E',
                templateUrl: 'application/components/main/main.html',
                controller: MainController
            }

            MainController.$inject = ['$scope', '$http'];

            function MainController($scope, $http){
                $scope.characters = null;
                $scope.currentCharacter = null;
                $scope.selected_attack = null;

                //Load character list
                $http.get('/res/map.json')
                .success(function(data){

                    $scope.characters = data;
                    $scope.currentCharacter = data[1];
                });

                //Load and process JSON for new character on change.
                $scope.$watch('currentCharacter', function(nv){
                    console.log(nv);

                    $http.get('/res/json/data/' + nv.file)
                    .then(function(attackJSON){
                        //Load GIF MAP and append gif url to attacks
                        $http.get('/res/gifs/' + nv.gif_dir + '/map.json')
                        .then(function(mapJSON){
                            var attacks = attackJSON.data.attacks;
                            var gif_dir = '/res/gifs/' + nv.gif_dir + '/';

                            for(var i = 0; i < attacks.length; i++){
                                var gif = mapJSON.data[attacks[i].Command];
                                if(gif)
                                    attacks[i].gif = gif;
                                else
                                    attacks[i].gif = null;
                            }

                            console.log(attacks);
                            //Bind new attackset to scope
                            $scope.current_attackset = attacks;
                            $scope.selected_attack = attacks[0];
                        }, function(response){
                            //No JSON Map Found
                            $scope.current_attackset = attackJSON.data.attacks;
                            $scope.selected_attack = attackJSON.data.attacks[0];
                        });
                    });
                });

            }
        });
    }
})