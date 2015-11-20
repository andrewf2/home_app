window.app.service('HomeService',function($http){
  this.all = function(){
     return $http.get("/homes").then(function(response) {return response});
    
  }
  
  this.find = function(id){
    return $http.get("/homes/"+ id).success(function(response) {return response});
  }
  
  
  this.destory = function(id){
    return $http.delete("/homes/"+ id).success(function(response) {return response});
    
  }

})