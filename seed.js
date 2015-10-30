'use strict';
var async = require("async");

  var customer = {
    firstName:"John",
    lastName:"Doe",
    emailAddress:"johndoe@gmail.com",
    homeId:1,
    password:"password"
  }
   
  
  var customer2 = {
    firstName:"Jimmy Eat",
    lastName:"World",
    emailAddress:"jimmyeatworld@gmail.com",
    homeId:2,
    password:"password"
  }
  
   var builder = {
    customers: [1,2],
    firstName: "Bob",
    lastName: "Builder",
    emailAddress:"bobthebuilder@gmail.com",
    password:"password"
  }
  
  var customer3 = {
    firstName:"Ben",
    lastName:"Dover",
    emailAddress:"ben@gmail.com",
    homeId:3,
    password:"password"
  }
  
  var customer4 = {
    firstName:"Ben's",
    lastName:"Wife",
    emailAddress:"benswife@gmail.com",
    homeId:3,
    password:"password"
  }
  
  var house2 = {
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
            r.db('home_owner_center').table('users').indexCreate('homeId').run().then(function(){
              async.parallel([
                function(callback){
                   callback(null,r.db('home_owner_center').table('users').insert(customer).run())
                   console.log("query finished1")
               },
               function(callback){
                   callback(null,r.db('home_owner_center').table('users').insert(customer2).run())
                   console.log("query finished2")
               },
               function(callback){
                   callback(null,r.db('home_owner_center').table('users').insert(builder).run())
                   console.log("query finished3")
               },
               function(callback){
                   callback(null,r.db('home_owner_center').table('users').insert(customer3).run())
                   console.log("query finished4")
               },
               function(callback){
                   callback(null,r.db('home_owner_center').table('users').insert(customer4).run())
                   console.log("query finished5")
               },
               function(callback){
                   callback(null,r.db('home_owner_center').table('homes').insert(house).run())
                   console.log("query finished6")
               },
               function(callback){
                   callback(null,r.db('home_owner_center').table('homes').insert(house2).run())
                   console.log("query finished7")
               },
               function(callback){
                   callback(null,r.db('home_owner_center').table('homes').insert(house3).run())
                   console.log("query finished8")
               }
               
               ],function(err,result){
                   if(err){
                       console.log(err)
                   }
                   console.log("Query ran sucessfully")
               });
              return
            })
           })
         })
       })
}

function run(){
  if(r.dbList().contains('home_owner_center')){
   try{
      r.dbDrop('home_owner_center').run().then(function(){
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
run()







  
  