'use strict';

/**
 * @ngInject
 */
function MyHomeController($scope,HomeService,$rootScope) {
  
  $scope.currentUser = window.currentUser
  

  HomeService.getMainImage(window.currentUser.homeId).then(function(data){
      $scope.home.image = data.$value
  })
    
  HomeService.find(window.currentUser.homeId).then(function(promise){
    window.currentUser.home = promise.data
    
    $scope.home = promise.data
    
  })
  
}

window.app.controller('MyHomeController', MyHomeController);