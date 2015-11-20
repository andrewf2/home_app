'use strict';

/**
 * @ngInject
 */
function LoginController($scope,$http,$rootScope) {
  
  $rootScope.apiKey;
  $scope.test = "hi"

  $scope.login = function(){
    
  }
  
 
}

window.app.controller('LoginController', LoginController);