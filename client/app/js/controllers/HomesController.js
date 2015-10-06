'use strict';

/**
 * @ngInject
 */
function HomesController($scope,$http) {

  $scope.homes;
   $http.get("/homes")
    .success(function(response) {$scope.homes = response;});

}

window.app.controller('HomesController', HomesController);