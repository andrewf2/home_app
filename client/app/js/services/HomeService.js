function HomeService($http,$firebaseObject,BaseURL,CrudService){
  this.resource = "homes"
  
  this.findByAddress = function(address){
    return $http.get(BaseURL + "/" + this.resource + '/address/' + address)
  }
  
  this.getMainImage = function(id){
    var url = "https://homeownercenter.firebaseio.com/homes/" + id
    console.log(url)
    var refImg = new Firebase(url);
    var ImgObj = $firebaseObject(refImg);
    return ImgObj.$loaded()
  }
  
    
    
  
  angular.extend(HomeService.prototype, CrudService);
  

}

window.app.service('HomeService', HomeService)