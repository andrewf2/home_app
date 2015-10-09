var SuperModel =  require('./super-model.js')();
var Home = Object.create(SuperModel);
Home.tableName = "homes"
Home.getCustomers = function *(id){
  var query =  yield SuperModel.db.table("users").filter({
        homeId: parseInt(id)
      }).run()
  return query[0]
  
}
module.exports = function(){
  
  return Home
  
}




