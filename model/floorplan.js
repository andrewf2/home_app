var SuperModel =  require('./super-model.js')();

var FloorPlan = Object.create(SuperModel);
FloorPlan.tableName = "floorplans"

FloorPlan.instance = function(name,basePrice,sqft,bedAmt,bathAmt){
  return new FloorPlanSchema(name,basePrice,sqft,bedAmt,bathAmt)
}

function FloorPlanSchema(name,basePrice,sqft,bedAmt,bathAmt){
    this.id = null
    this.name = name
    this.basePrice = basePrice
    this.sqft = sqft
    this.bedAmt = bedAmt
    this.bathAmt = bathAmt
    
}




module.exports = function(){
  
  return FloorPlan
  
}