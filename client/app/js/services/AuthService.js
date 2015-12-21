window.app.service('AuthService', function($http, $rootScope, $location) {

  this.login = function(user) {
    $http.post('/login', user).then(function(data) {
        if(data['data'].message == undefined){
          sessionStorage['currentUser'] = JSON.stringify(data['data'])
          $rootScope.currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
          $location.path('/myHome/' + $rootScope.currentUser.emailAddress)
        }else{
          console.log(data)
          
        }
        
      }),
      function(reason) {
        console.log(reason)
      }
    }
    
  this.isLoggedIn = function(){
    if(sessionStorage.getItem('currentUser') == undefined || sessionStorage.getItem('currentUser') == null){
      return false
    }else{
      $rootScope.currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
      return true
    }
  }
    
   
})