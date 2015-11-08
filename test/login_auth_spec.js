var coMocha = require('co-mocha')
var assert = require("assert");
var Auth = require("../auth/Auth.js")();
var User = require("../model/user.js")();

describe('auth()', function(){
  
  it('should fail as user does not exist',function*(){
    var creds = {
      email:'andrewf02@gmail.com',
      password:'password'
      
    }
    
   var response = yield Auth.createSession(creds);
   assert.equal(undefined, response.key);

    
  })
  
  it('should authorize the user and return a API key',function*(){
    var creds = {
      email:'johndoe@gmail.com',
      password:'password'
    }
    
    var response = yield Auth.createSession(creds);
    
    
    
    
  })
  
  
  
})