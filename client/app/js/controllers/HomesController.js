'use strict';



/**
 * @ngInject
 */
function HomesController($scope,$http) {

  $scope.homes = "empty"
   $http.get("/homes")
    .success(function(response) {$scope.homes = response.homes;});

}

window.app.controller('HomesController', HomesController);