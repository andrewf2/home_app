'use strict';

  var requires = [
	  "ngResource",
	  "ngRoute",
	  "firebase"
  ];

  // mount on window for testing
  window.app = angular.module('home_owner_center', requires);
  
  window.app.run(function($rootScope,$location,AuthService){
   
     $rootScope.$on('$routeChangeStart', function (event) {

        if (!AuthService.isLoggedIn()) {
            console.log('DENY');
            event.preventDefault();
            $location.path('/');
        }
        else {
            console.log('ALLOW');
        }
    });
    
    
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


  


