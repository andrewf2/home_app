function UserService($http,$firebaseObject,BaseURL,CrudService){
  this.resource = "users"
  
  this.findByEmail = function(email){
    return $http.get(BaseURL + "/" + this.resource + "/email/" + email)
  }
  
  angular.extend(UserService.prototype, CrudService);

}

window.app.service('UserService',UserService)
