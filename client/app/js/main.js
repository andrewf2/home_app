'use strict';

  var requires = [
	  "ngResource",
	  "ngRoute",
  ];

  // mount on window for testing
  window.app = angular.module('home_owner_center', requires);
  
  function HomesController($scope,$http) {

  $scope.homes = "empty"
   $http.get("/homes")
    .success(function(response) {$scope.homes = response;});

}

window.app.controller('HomesController', HomesController);



  window.app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "/views/homes.html",
      controller: "HomesController"
     
    }
  ).otherwise('/');
});


  


