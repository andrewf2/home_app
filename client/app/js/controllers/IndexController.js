'use strict';

/**
 * @ngInject
 */
function IndexController($scope,$http,$rootScope,$location) {
  
   if($rootScope.currentUser != undefined || $rootScope.currentUser != null){
      $location.path('/myHome/'+ currentUser.emailAddress);
   }
   
  $scope.login = function(){
   
      $http.post('/login',$scope.user).then(function(data){
        localStorage['currentUser'] = JSON.stringify(data['data'])
        $rootScope.currentUser = data.data
        $location.path('/myHome/' + $rootScope.currentUser.emailAddress)
      
        }),function(reason){
      
          console.log(reason)
        }
    
     }  
  
  
 
}

window.app.controller('IndexController', IndexController);