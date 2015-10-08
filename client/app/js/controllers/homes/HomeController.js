'use strict';

/**
 * @ngInject
 */
function HomeController($scope,$http,$routeParams,HomeService) {

  HomeService.find($routeParams.id).then(function(promise){
    $scope.home = promise.data[0]
   
   })
  
 
}

window.app.controller('HomeController', HomeController);