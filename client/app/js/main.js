'use strict';

  var requires = [
	  "ngResource",
	  "ngRoute",
	  "firebase"
  ];
  
  function setCurrentUser(promise,$q,$rootScope){
    return $q(function(resolve, reject) {
        setTimeout(function() {
          $rootScope.currentUser = promise.data
          console.log($rootScope)
          if ($rootScope.currentUser != undefined ){
            resolve($rootScope.currentUser)
          }else {
            reject("Failed")
          }
          
        }, 1000);
     });
    
  }

  // mount on window for testing
  window.app = angular.module('home_owner_center', requires);
  
  window.app.constant('BaseURL', new String());
  
  window.app.run(function($rootScope,$location,AuthService,UserService,CacheService,$q){
    
     $rootScope.logout_in = 'Login';
     
     $rootScope.company = {
       name:"Centurion",
       address:"4507 17th street",
       phone_number:"2082066079"
     };
     
     $rootScope.$on('$routeChangeStart', function (event) {
        
        if (AuthService.isLoggedIn() != true) {
            console.log('DENY');
            console.log(sessionStorage['session'])
            event.preventDefault();
            $rootScope.logout_in = '';
            $location.path('/');
        }
        else {
          
            console.log('ALLOW');
            $rootScope.logout_in = 'Logout';
            $location.path('/myHome/' + window.currentUser.emailAddress);
  
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


  


