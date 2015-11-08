var User = require('../model/user.js')();

module.exports = function(){
  
  return{
    
    createSession: function*(creds){
      
      var error = {}
      var key;
      
      var user = yield User.findBy('emailAddress',creds.email)
      
       
      if(user[0] == undefined){
        error.message = "User does not exist"
        error.code = 404
        return error
         
      }else if(user[0].emailAddress == creds.email && user[0].password == creds.password){
        key = "random generated key";
        var sessionObject = user[0]
        sessionObject.key = key;
        User.save(sessionObject);
        return sessionObject;
 
        }else{
          console.log("fail")
        }
      }
      
    }
    
  }
