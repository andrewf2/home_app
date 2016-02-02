function FirebaseImgService($http,$firebaseObject,FireBaseURL){

 this.getImage = function(id){
   var url = FireBaseURL + this.resource+"/" + id
   var refImg = new Firebase(url);
   var ImgObj = $firebaseObject(refImg);
   return ImgObj.$loaded()
 }
 
 this.getAllImages = function(){
   var url = FireBaseURL + this.resource+"/"
   var refImg = new Firebase(url);
   var ImgObj = $firebaseObject(refImg);
   return ImgObj.$loaded()
 }
  

  
}

window.app.service('FirebaseImgService', FirebaseImgService)