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



function *run(){
   try{
    yield r.dbDrop('home_owner_center').run()
    yield r.dbCreate('home_owner_center').run();
    var hoc = yield r.db('home_owner_center');
    yield hoc.tableCreate('users', {primaryKey: "id"})
    yield hoc.tableCreate('homes',{primaryKey:"id"})
    yield hoc.table('users').insert(customer).run();
    yield hoc.table('users').insert(customer2).run();
    yield hoc.table('users').insert(builder).run();
    yield hoc.table('homes').insert(house).run();
    yield hoc.table('homes').insert(house2).run();
    yield hoc.table('homes').insert(house3).run();
  
 
    }
    catch (e){
        console.log(e)
         
        
    }
    
}

for(var v of run()){
  v
}




  
  