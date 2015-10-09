'use strict';



  var customer = {
    id: 1,
    customers: [],
    firstNamename:"John",
    lastName:"Doe",
    emailAddress:"johndoe@gmail.com",
    houseId:1,
    password:"password"
  }
   
  
  var customer2 = {
    id: 3,
    customers: [],
    firstNamename:"Jimmy Eat",
    lastName:"World",
    emailAddress:"jimmyeatworld@gmail.com",
    houseId:2,
    password:"password"
  }
  
   var builder = {
    id: 2,
    customers: [1,2],
    firstName: "Bob",
    lastName: "Builder",
    emailAddress:"bobthebuilder@gmail.com",
    password:"password"
  }
  
  var house2 = {
    id:2,
    address : "311 Bluebell st",
    progress : {
    brickWork : false,
    cabinets : false,
    carpetLaid : false,
    electricalWork : false,
    flooring : false,
    foundationDone : false,
    framed : false,
    insulation : false,
    interiorPaint : false,
    lighting : false,
    roofSheeted : false,
    roofShingled : false,
    siding : false,
    sodLaid : false,
    trim : false,
    trusses : false
    }
   }
   
   var house3 = {
    id:3,
    address : "55 Main st",
    progress : {
    brickWork : false,
    cabinets : false,
    carpetLaid : false,
    electricalWork : false,
    flooring : false,
    foundationDone : false,
    framed : false,
    insulation : false,
    interiorPaint : false,
    lighting : false,
    roofSheeted : false,
    roofShingled : false,
    siding : false,
    sodLaid : false,
    trim : false,
    trusses : false
    }
   }
  
   var house = {
    id:1,
    address : "101 maple street",
    progress : {
    brickWork : false,
    cabinets : false,
    carpetLaid : false,
    electricalWork : false,
    flooring : false,
    foundationDone : false,
    framed : false,
    insulation : false,
    interiorPaint : false,
    lighting : false,
    roofSheeted : false,
    roofShingled : false,
    siding : false,
    sodLaid : false,
    trim : false,
    trusses : false
    }
  }
  
var r = require('rethinkdbdash')({
    pool: true
});

function seed(){
   r.dbCreate('home_owner_center').run().then(function(){
         r.db('home_owner_center').tableCreate('users', {primaryKey: "id"}).run().then(function(){
          r.db('home_owner_center').tableCreate('homes', {primaryKey: "id"}).run().then(function(){
             r.db('home_owner_center').table('users').insert(customer).run();
             r.db('home_owner_center').table('users').insert(customer2).run();
             r.db('home_owner_center').table('users').insert(builder).run();
             r.db('home_owner_center').table('homes').insert(house).run();
             r.db('home_owner_center').table('homes').insert(house2).run();
             r.db('home_owner_center').table('homes').insert(house3).run();
             console.log("query finished")
             
           })
         })
       })
}

function *run(){
  if(r.dbList().contains('home_owner_center')){
   try{
     yield r.dbDrop('home_owner_center').run().then(function(){
      seed();
    })
  }
    catch (e){
        console.log(e)
     
    }
    
  }else{
    seed();
  }
}

run().next()





  
  