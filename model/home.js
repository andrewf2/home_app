var SuperModel =  require('./super-model.js')();
var Home = Object.create(SuperModel);
Home.tableName = "homes"
Home.getCustomers = function(id){
  return SuperModel.db.table("users").filter({
        homeId: parseInt(id)
      }).run()
  
}
module.exports = function(){
  
  return Home
  
}




