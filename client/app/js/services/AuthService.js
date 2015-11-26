window.app.service('AuthService', function($http, $rootScope, $location) {

  this.login = function(user) {
    $http.post('/login', user).then(function(data) {
        localStorage['currentUser'] = JSON.stringify(data['data'])
        $rootScope.currentUser = data.data
        $location.path('/myHome/' + $rootScope.currentUser.emailAddress)
      }),
      function(reason) {
        console.log(reason)
      }
    }
})