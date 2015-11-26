'use strict';

/**
 * @ngInject
 */
function IndexController($scope,$http,$rootScope,$location,AuthService) {
  
   if($rootScope.currentUser != undefined || $rootScope.currentUser != null){
      $location.path('/myHome/'+ $rootScope.currentUser.emailAddress);
   }
   
   $scope.login = function(){
     AuthService.login($scope.user)
   } 
 
}

window.app.controller('IndexController', IndexController);