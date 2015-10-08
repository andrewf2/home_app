'use strict';

/**
 * @ngInject
 */
function HomesController($scope,$http,$routeParams,HomeService) {

   HomeService.all().then(function(promise){
    $scope.homes = promise.data
    console.log($scope.homes)
   })
 
}

window.app.controller('HomesController', HomesController);