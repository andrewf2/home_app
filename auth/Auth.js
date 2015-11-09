var User = require('../model/user.js')();

module.exports = function(){
  
  return{
    
    createSession: function*(creds){
      
      var error = {}
      var key;
      
      var user = yield User.findBy('emailAddress',creds.emailAddress);
      
       
      if(user[0] == undefined){
        error.message = "User does not exist";
        error.code = 404;
        return error
      }
      else if(user[0].emailAddress == creds.emailAddress && user[0].password == creds.password){
        key = "random generated key";
        var sessionObject = user[0];
        sessionObject.key = key;
        User.save(sessionObject);
        
        return sessionObject;
 
      }
      else if(user[0].password != creds.password){
        error.code = 401
        error.message = "invalid password";
        return error;
      }
      else{
        console.log("fail")
        error.code = 404;
        return error
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
        
        if(user[0] == undefined){
        error.message = "User does not exist";
        error.code = 404;
        return error
      }
      else if(user[0].emailAddress == currentUser.emailAddress && user[0].password == currentUser.password){
        var key = null;
        var sessionObject = user[0];
        sessionObject.key = key;
        User.save(sessionObject);
        
 
        }else{
          console.log("fail")
        }
        
      }
      
    }
    
  }
