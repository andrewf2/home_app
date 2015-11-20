'use strict';

/**
 * @ngInject
 */
function IndexController($scope,$http,$routeParams) {
  
  $scope.login = function(){
    
    $http.post('/login',$scope.user).then(function(data){
      
      console.log(data)
    }),function(reason){
      
      console.log(reason)
    }
  }
  
  
 
}

window.app.controller('IndexController', IndexController);