'use strict';

  var requires = [
	  "ngResource",
	  "ngRoute",
  ];

  // mount on window for testing
  window.app = angular.module('home_owner_center', requires);
  
  window.app.run(function($rootScope){
   
      var user = JSON.parse(localStorage.getItem('currentUser'))
      if(user == undefined){
        $rootScope.currentUser = null
      }
      else{
        $rootScope.currentUser == user;
      }
    
    
  })
  
  window.app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "../views/_landing.html",
      controller: "IndexController"
     
    }
  ).when("/myHome/:email",
    {
      templateUrl: "../views/my-home.html",
      controller: "MyHomeController"
    }
    
  ).otherwise('/');
  

});


  


