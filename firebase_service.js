var Firebase = function(){

  var fb = require('firebase');

  this.firebaseRef = function(){
    return new fb("https://homeownercenter.firebaseio.com/");
  };
  
  
};

exports.instantiate = function(){
  return new Firebase()
}

