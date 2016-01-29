'use strict';
var async = require("async");
var User = require("./model/user.js")()
var Home = require("./model/home.js")()
var FloorPlan = require('./model/floorplan.js')()

  var address1 = {
      streetAddress: "311 Bluebell st",
      city:"Rexburg",
      state:"Idaho",
      zip:"83440"
  }
  var address2 = {
      streetAddress: "55 Main st",
      city:"Rexburg",
      state:"Idaho",
      zip:"83440"
  }
  var address3 = {
      streetAddress: "101 maple street",
      city:"Sugar City",
      state:"Idaho",
      zip:"83448"
  }
  

  var customer = User.instance("John","Doe","johndoe@gmail.com",'dc03d39f-1234-4b9d-90b4-ec3e8334d1a3',"password",'customer')
  customer.id = 'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b1'
  
  var customer2 = User.instance("Jimmy Eat","World","jimmyeatworld@gmail.com",'dc03d39f-7d0e-1324-90b4-ec3e8334d1a1',"password",'customer')
  customer2.id = 'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b2'
  
  var builder = User.instance("Bob","The Builder","bobthebuilder@gmail.com",null,"password",'builder')
  builder.id = 'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b3'
  
  var customer3 = User.instance("Ben","Dover","ben@gmail.com",'dc03d39f-7d0e-4b9d-1234-ec3e8334d1a2',"password","customer")
  customer3.id = 'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b4'
  
  var customer4 = User.instance("Ben's","Wife","benwife@gmail.com",'dc03d39f-7d0e-4b9d-1234-ec3e8334d1a2',"password","customer")
  customer4.id = 'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b5'
  
  var house = Home.instance(address1,200000,builder,'dc03d789-123e-4b9d-90b4-ec3e8334d1b5','2016-05-31')
  house.id = 'dc03d39f-1234-4b9d-90b4-ec3e8334d1a3'
  
  var house2 = Home.instance(address2,250000,builder,'dc03d456-4567-4b9d-90b4-ec3e8334d1b5','2016-05-31')
  house2.id = 'dc03d39f-7d0e-1324-90b4-ec3e8334d1a1'
  
  var house3 = Home.instance(address3,500000,builder,'dc03d123-7890-4b9d-90b4-ec3e8334d1b5','2016-05-31')
  house3.id = 'dc03d39f-7d0e-4b9d-1234-ec3e8334d1a2'
  
  var floorplan1 = FloorPlan.instance("Sienna",270000,2400,4,2)
  floorplan1.id = 'dc03d123-7890-4b9d-90b4-ec3e8334d1b5'
  
  var floorplan2 = FloorPlan.instance("Imperial",200000,1500,3,2)
  floorplan2.id = 'dc03d456-4567-4b9d-90b4-ec3e8334d1b5'
  
  var floorplan3 = FloorPlan.instance("Palmoa",350000,3200,5,2)
  floorplan3.id = 'dc03d789-123e-4b9d-90b4-ec3e8334d1b6'
  
  var floorplan4 = FloorPlan.instance("Monarch", 285000,2600,4,2)
  floorplan4.id = 'dc03d789-123e-4b9d-90b4-ec3e8334d1b7'
  
  var floorplan5 = FloorPlan.instance("Georgtown", 180000,1500,3,2)
  floorplan5.id = 'dc03d789-123e-4b9d-90b4-ec3e8334d1b5'
  
  var floorplan6 = FloorPlan.instance("Manhatten", 170000,1300,2,1)
  floorplan6.id = 'dc03d789-123e-4b9d-90b4-ec3e8334d1b8'
  
  
  
   
   
  
   
  
var r = require('rethinkdbdash')({
    pool: true
});

function seed(){
     r.dbCreate('home_owner_center').run().then(function(){
         r.db('home_owner_center').tableCreate('users', {primaryKey: "id"}).run().then(function(){
          r.db('home_owner_center').tableCreate('homes', {primaryKey: "id"}).run().then(function(){
              r.db('home_owner_center').tableCreate('floorplans', {primaryKey: "id"}).run().then(function(){
                     async.parallel([
                function(callback){
                   callback(null,r.db('home_owner_center').table('users').insert(customer).run())
                   console.log("query finished")
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
               },
               function(callback){
                   callback(null,r.db('home_owner_center').table('floorplans').insert(floorplan1).run())
                   console.log("query finished9")
               },
               function(callback){
                   callback(null,r.db('home_owner_center').table('floorplans').insert(floorplan2).run())
                   console.log("query finished10")
               },
               function(callback){
                   callback(null,r.db('home_owner_center').table('floorplans').insert(floorplan3).run())
                   console.log("query finished11")
               },
               function(callback){
                   callback(null,r.db('home_owner_center').table('floorplans').insert(floorplan4).run())
                   console.log("query finished12")
               },
               function(callback){
                   callback(null,r.db('home_owner_center').table('floorplans').insert(floorplan5).run())
                   console.log("query finished13")
               },
               function(callback){
                   callback(null,r.db('home_owner_center').table('floorplans').insert(floorplan6).run())
                   console.log("query finished14")
               },
               
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







  
  