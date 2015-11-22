'use strict';

/**
 * @ngInject
 */
function MyHomeController($scope,$http,HomeService,$rootScope) {
  $scope.user = $rootScope.currentUser;
  console.log($scope.user)
  HomeService.find($scope.user.homeId).then(function(promise){
    $scope.user.home = promise.data
   
   })
  
}

window.app.controller('MyHomeController', MyHomeController);