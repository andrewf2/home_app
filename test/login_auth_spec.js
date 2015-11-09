var coMocha = require('co-mocha')
var assert = require("assert");
var Auth = require("../auth/Auth.js")();
var User = require("../model/user.js")();

describe('auth()', function(){
  var response;
  describe("nonexisting user tries to login",function(){
    before(function*(){
    response = null
    
    var creds = {
      emailAddress:'andrewf02@gmail.com',
      password:'password'
    }
    
    response = yield Auth.createSession(creds);
   
    })
  
   it('should fail as user does not exist',function*(){
     assert.equal(response.code,404)
 
    })
  
    after(function(){
      response = null
    })
})
 
  describe("login with valid user",function(){
    before(function*(){
    response = null
    
    var creds = {
      emailAddress:'johndoe@gmail.com',
      password:'password'
    }
    
    response = yield Auth.createSession(creds);
    })
  
    it('should authorize the user and return a API key',function*(){
    
      assert.notEqual(undefined,response.key)
    
    })
  })
 
})