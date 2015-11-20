var User = require('../model/user.js')();
var uuid = require('uuid');

  module.exports =  function(session){
  
  return{
    createSession: function*(creds){
      
      var error = {}
      var key;
      var sessionObject;
      var user = yield User.findBy('emailAddress',creds.emailAddress);
      
       
      if(user[0] == undefined){
        error.message = "User does not exist";
        error.code = 404;
        return error
      }
      else if(user[0].emailAddress == creds.emailAddress && user[0].password == creds.password){
        if(sessionExists(creds.emailAddress,session)){
          sessionObject = session[this.getSession(creds.emailAddress,session)]
          console.log("session already exists")
        }else{
          key = uuid.v1();
          sessionObject = user[0];
          sessionObject.key = key;
          User.save(sessionObject);
        }
        return sessionObject;
 
      }
      else if(user[0].password != creds.password){
        error.code = 401
        error.message = "invalid password";
        return error;
      }
      else{
        console.log("Login failed")
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
        
      },
      
      checkRole: function(role,user,ctx){
        console.log(user)
        if(user.emailAddress == undefined || user.role != role){
          ctx.redirect('/')
         }
        console.log(user)
        
      },
      
      getSession: function(email,session){
        if(session == {} || session == undefined){
          return false;
        }else{
          for(var key in session){
            if(session[key].emailAddress == email){
              return key
            }else{
              console.log("no session found")
            }
          }
        }
      }
    }
  }
  
  function sessionExists(email,session){
    if(session == {} || session == undefined){
      return false;
    }else{
      for(var key in session){
        if(session[key].emailAddress == email){
          return true;
        }else{
          return false;
        }
      }
    }
    
        
  }
  
  
