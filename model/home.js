var Home = function(){
  var fb = require = ('../firebase-service').instantiate();
  var homeRef = fb.firebaseRef + "/homes";
  
  this.all = function(){
    return homeRef;
  }
  
  this.find = function(id){
    return homeRef + id.toString();
  }
  
}