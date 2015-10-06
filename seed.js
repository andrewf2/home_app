'use strict';


module.exports = {
  


customer: {
    id: 1,
    customers: [],
    firstNamename:"John",
    lastName:"Doe",
    emailAddress:"johndoe@gmail.com",
    houseId:1,
    password:"password"
  },
   builder: {
    id: 2,
    customers: [1],
    firstName: "Bob",
    lastName: "Builder",
    emailAddress:"bobthebuilder@gmail.com",
    password:"password"
  },
  
   house: {
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
}
  
  

  
  