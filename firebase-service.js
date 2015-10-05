var Firebase = function(){

  var fb = require('firebase');

  this.firebaseRef = function(){
    return new fb("https://homeownercenter.firebaseio.com/");
  };
  
  
  this.searchByModel = function(model){
    return this.firebaseRef() + "/" + model
  }
  
  
};

exports.instantiate = function(){
  return new Firebase()
}

