'use strict';
var async = require("async");

  var customer = {
    id:'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b1',
    firstName:"John",
    lastName:"Doe",
    emailAddress:"johndoe@gmail.com",
    homeId:'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a3',
    password:"password",
    role:'customer',
    key:null
  }
   
  
  var customer2 = {
    id:'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b2',
    firstName:"Jimmy Eat",
    lastName:"World",
    emailAddress:"jimmyeatworld@gmail.com",
    homeId:'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a2',
    password:"password",
    role:'customer',
    key:null
  }
  
   var builder = {
    id:'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b3',
    customers: ['dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b1','dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b2','dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b4','dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b5'],
    firstName: "Bob",
    lastName: "Builder",
    emailAddress:"bobthebuilder@gmail.com",
    password:"password",
    role:"admin",
    key:null
  }
  
  var customer3 = {
    id:'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b4',
    firstName:"Ben",
    lastName:"Dover",
    emailAddress:"ben@gmail.com",
    homeId:'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a1',
    password:"password",
    role:"customer",
    key:null
  }
  
  var customer4 = {
    id:'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b5',
    firstName:"Ben's",
    lastName:"Wife",
    emailAddress:"benswife@gmail.com",
    homeId:'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a1',
    password:"password",
    role:"customer",
    key:null
  }
  
  var house2 = {
    id:'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a1',
    address : "311 Bluebell st",
    price: 200000,
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
    id:'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a2',
    address : "55 Main st",
    price: 400000,
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
    id:'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a3',
    address : "101 maple street",
    price:500000,
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







  
  