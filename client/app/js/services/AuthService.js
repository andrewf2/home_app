window.app.service('AuthService', function($http, $rootScope, $location, UserService, BaseURL,$q,CacheService) {

  var sessionData = sessionStorage['session']
  
  this.login = function(user) {
    $http.post(BaseURL + '/login', user).then(function(promise) {
        if(promise['data'].message == undefined){
          CacheService.setSessionInCache(promise.data).then(function(){
            CacheService.getSessionFromCache().then(function(data){
              window.currentUser = data
              $location.path('/myHome/'+ window.currentUser.emailAddress)
            })
          })
        }else{
          console.log(promise['data'].message)
        }
        
      }),
      function(reason) {
        console.log(reason)
      }
    }
  
  $rootScope.logout = function(){
    killServerSession().then(function(){
      window.currentUser = null;
      sessionStorage.removeItem('session')
    })
    
    
  }
    
  this.isLoggedIn = function(){
    if( window.currentUser == undefined){
      if(sessionStorage['session'] == undefined){
        return false
      }else{
        window.currentUser = JSON.parse(sessionStorage['session'])
        return true
      }
      
    }else{
      return true
    }
  }
  
  var killServerSession = function(){
    var parsedSession = JSON.parse(sessionData)
    $http.delete(BaseURL + '/session', parsedSession.key)
  }
  
  
    
   
})