window.app.service('HomeService',function($http,$firebaseObject){
  this.all = function(){
     return $http.get("/homes").then(function(response) {return response});
    
  }
  
  this.find = function(id){
    return $http.get("/homes/"+ id).success(function(response) {return response});
  }
  
  
  this.destory = function(id){
    return $http.delete("/homes/"+ id).success(function(response) {return response});
    
  }
  
  this.getMainImage = function(id){
    var ref = new Firebase("https://homeownercenter.firebaseio.com/homes/" + id);
    return $firebaseObject(ref).$loaded();
  }

})