var SuperModel =  require('./super-model.js')();

var Home = Object.create(SuperModel);
Home.tableName = "homes"

Home.getCustomers = function *(id){
  var query =  yield SuperModel.db.table(Home.tableName).filter({homeId: parseInt(id)}).run()
  return query
}



Home.instance = function(address,price,builder,floorplanId,ECD){
  return new HomeSchema(address,price,builder,floorplanId,ECD)
}

function HomeSchema(address,price,builder,floorplanId,ECD){
    this.id = null
    this.address = address
    this.price = price
    this.builder = builder
    this.floorplanId = floorplanId
    this.ECD = ECD
    this.progress = {
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




module.exports = function(){
  
  return Home
  
}




