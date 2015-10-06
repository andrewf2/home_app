'use strict';

  var requires = [
	  "ngResource",
	  "ngRoute",
  ];

  // mount on window for testing
  window.app = angular.module('home_owner_center', requires);
  
  window.app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "/views/homes.html",
      controller: "HomesController"
     
    }
  ).when("/home/:id",
    {
      templateUrl: "/views/home.html",
      controller: "HomesController"
    }
    
  ).otherwise('/');
  

});


  


