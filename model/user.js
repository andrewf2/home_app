var SuperModel =  require('./super-model.js')();

var User = Object.create(SuperModel);
User.tableName = "users"

User.instance = function(firstName,lastName,emailAddress,homeId,password,role){
  return new UserSchema(firstName,lastName,emailAddress,homeId,password,role)
}

function UserSchema(firstName,lastName,emailAddress,homeId,password,role){
  this.firstName = firstName
  this.lastName = lastName
  this.emailAddress = emailAddress
  this.homeId = homeId
  this.password = password
  this.role = role
  this.key = null
  
}
  


module.exports = function(){
  
  return User
  
}







