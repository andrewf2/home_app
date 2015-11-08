var SuperModel =  require('./super-model.js')();
var User = Object.create(SuperModel);
User.tableName = "users"

module.exports = function(){
  
  return User
  
}





