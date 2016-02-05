var User = require('../model/user.js')();
var uuid = require('uuid');

  module.exports =  function(){
  
  return{
    createSession: function*(creds){
    
      var key;
  
      var user = yield User.findBy('emailAddress',creds.emailAddress);
    
      if(user == undefined){
        return fail("User does not exist")
      }
      
      else if(user.emailAddress == creds.emailAddress && user.password == creds.password){
        if(sessionExists(user)){
          return user
        }else{
          user = yield setKey(user,uuid.v1())
        }
        return user;
 
      }
      else if(user.password != creds.password){
        return fail("invalid password")
      }
      else{
        return fail("Login Failed")
        }
      },
      
      format: function(req){
        var post = JSON.stringify(req);
        var creds = JSON.parse(post);
        return creds
      },
      
      destorySession: function*(currentUser){
        
        var user = yield User.findBy('emailAddress',currentUser.emailAddress);
        var error = {}
        
        if(user == undefined){
         return fail("User does not exist")
      }
      else if(user.emailAddress == currentUser.emailAddress && user.password == currentUser.password){
        setKey(user,null)
        
        }else{
          console.log("fail")
        }
        
      },
      
    }
  }
  
  function sessionExists(user){
    if(user.key != null){
      return true;
    }else{
      return false;
    }
    
  }
  
  function fail(message){
    var error = {}
    error.message = message;
        error.code = 404;
        return error
  }
  
  function setKey(user,val){
    
    var key = val;
    var sessionObject = user;
    sessionObject.key = key;
    return User.save(sessionObject).then(function(){
      return sessionObject
    });
  }
  
