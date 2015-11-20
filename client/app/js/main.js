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
      templateUrl: "../views/_landing.html",
      controller: "IndexController"
     
    }
  ).when("/homes/:id",
    {
      templateUrl: "/views/home.html",
      controller: "HomeController"
    }
    
  ).otherwise('/');
  

});


  


