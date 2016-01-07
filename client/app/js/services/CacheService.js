window.app.service('CacheService', function($http, $rootScope, $location, UserService, BaseURL,$q) {
  
  
  this.getSessionFromCache = function(){
    return $q(function(resolve,reject){
      var session = JSON.parse(sessionStorage['session'])
      if (session != undefined){
        resolve(session)
      } else{
        reject("fail")
      } 
    })
  }
  
  this.setSessionInCache = function(user){
    return $q(function(resolve,reject){
      var session = user
      sessionStorage['session'] = JSON.stringify(session)
      if (JSON.parse(sessionStorage['session']) != undefined){
        resolve()
      } else{
        reject()
      } 
    })
    
    
  }
  
})