var assert = require("assert");
var home = require("../model/home.js")();
var user = require("../model/user.js")();
var coMocha = require('co-mocha')






describe('all()',function(){
  
  it('should return an array of all the houses', function *(){
    var homes = yield home.all()
    assert.equal(3, homes.length);
  
  })
  
  it('should return an array of all the users', function *(){
    var users = yield user.all()
    assert.equal(5,users.length);
  })
  
})

describe('find()',function(){
  
    // customer = {
  //  id: 1,
  //  firstName:"John",
  //  lastName:"Doe",
  //  emailAddress:"johndoe@gmail.com",
  //  homeId:1,
  //  password:"password"
  //}
  it('should return a specified user', function*(){
    var findByUser = yield user.findBy('firstName','John');
    var findUser = yield user.find(findByUser[0].id);
    assert.equal("John",findUser.firstName);
    assert.equal("Doe",findUser.lastName);
    assert.deepEqual(findByUser[0],findUser);
    
  })
  
  it('should return a user by an attribute',function*(){
    var testUser = yield user.findBy('firstName','John');
    assert.equal("Doe", testUser[0].lastName)
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
    var findByHome = yield home.findBy('address','311 Bluebell st');
    var findHome = yield home.find(findByHome[0].id);
    assert.equal("311 Bluebell st", findHome.address);
    assert.equal(false,findHome.progress.brickWork)
    assert.deepEqual(findByHome[0],findHome);
  })
  
})

describe('create(),destroy()',function(){
  
  var testUser = {
    firstName:'Test',
    lastName:'User',
    emailAddress:'andrewf02@gmail.com',
    houseId:null,
    password:'password'
  }
  var verifiedUser;
  
  before(function*(){
    user.create(testUser)
    
    
  })
  
  it('should insert a user into the database and remove it',function*(){
   verifiedUser = yield user.findBy('firstName','Test');
   assert.equal("Test",verifiedUser[0].firstName);
   
  })
  
  after(function() {
    user.destroy(verifiedUser[0].id)
    assert.notEqual(user.find(verifiedUser[0].id),verifiedUser[0])
  });

  
})

describe('join()',function(){
  it('should perform an inner join' ,function*(){
    console.log(user.join());
  })
})




