var SuperModel =  require('./super-model.js')();
var Home = Object.create(SuperModel);
Home.tableName = "homes"
module.exports = function(){
  
  return Home
  
}




