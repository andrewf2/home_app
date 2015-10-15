var assert = require("assert");
var home = require("../model/home.js")();
var user = require("../model/user.js")();
var coMocha = require('co-mocha')




describe('all()',function(){
  
  it('should return an array of all the houses', function *(){
    var homes = yield home.all();
    assert.equal(3, homes.length);
    
    
  })
  
  it('should return an array of all the users', function *(){
    var users = yield user.all();
    assert.equal(4,users.length);
  })
  
  
  
})



describe('find()',function(){
  
    // customer = {
  //  id: 1,
  //  firstNamename:"John",
  //  lastName:"Doe",
  //  emailAddress:"johndoe@gmail.com",
  //  homeId:1,
  //  password:"password"
  //}
  it('should return a specified user', function*(){
    var testUser = yield user.find(1);
    assert.equal("John",testUser.firstName)
    assert.equal("Doe",testUser.lastName)
  })
  
  //var house3 = {
  //  id:3,
  //  address : "55 Main st",
  //  progress : {
  //  brickWork : false,
  //  cabinets : false,
  //  carpetLaid : false,
  //  electricalWork : false,
  //  flooring : false,
  //  foundationDone : false,
  //  framed : false,
  //  insulation : false,
  //  interiorPaint : false,
  //  lighting : false,
  //  roofSheeted : false,
  //  roofShingled : false,
  //  siding : false,
  //  sodLaid : false,
  //  trim : false,
  //  trusses : false
  //  }
   //}
  
  it('should return a specific home', function*(){
    var testHome = yield home.find(3);
    assert.equal("55 Main st", testHome.address);
    assert.equal(false,testHome.progress.brickWork)
  })
  
})
