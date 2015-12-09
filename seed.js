'use strict';
var async = require("async");
var User = require("./model/user.js")()
var Home = require("./model/home.js")()



  var customer = User.instance("John","Doe","johndoe@gmail.com",'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a3',"password",'customer')
  customer.id = 'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b1'
  
  var customer2 = User.instance("Jimmy Eat","World","jimmyeatworld@gmail.com",'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a2',"password",'customer')
  customer2.id = 'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b2'
  
  var builder = User.instance("Bob","The Builder","bobthebuilder@gmail.com",null,"password",'admin')
  builder.id = 'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b3'
  
  var customer3 = User.instance("Ben","Dover","ben@gmail.com",'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a1',"password","customer")
  customer3.id = 'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b4'
  
  var customer4 = User.instance("Ben's","Wife","benwife@gmail.com",'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a1',"password","customer")
  customer4.id = 'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1b5'
  
  var house = Home.instance("311 Bluebell st",200000,builder,'dc03d39f-123e-4b9d-90b4-ec3e8334d1b5','04/10/2016')
  house.id = 'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a3'
  
  var house2 = Home.instance('55 Main st',250000,builder,'dc03d39f-4567-4b9d-90b4-ec3e8334d1b5','05/31/2016')
  house2.id = 'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a1'
  
  var house3 = Home.instance("101 maple street",500000,builder,'dc03d39f-7890-4b9d-90b4-ec3e8334d1b5','12/31/2015')
  house3.id = 'dc03d39f-7d0e-4b9d-90b4-ec3e8334d1a2'
 
 
  
  
   
   
  
   
  
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







  
  