'use strict';

/**
 * @ngInject
 */
function MyHomeController($scope,$http,HomeService,$rootScope) {
  console.log($rootScope.currentUser)
  HomeService.find($rootScope.currentUser.homeId).then(function(promise){
    $rootScope.currentUser.home = promise.data
   
   })
  
}

window.app.controller('MyHomeController', MyHomeController);