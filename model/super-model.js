var r = require('rethinkdbdash')({
    pool: true
});




module.exports = function(){
  return  {
    all: function(){
     return  r.db('home_owner_center').table(this.tableName).run()
   },
 
   find: function(id){
     return r.db('home_owner_center').table(this.tableName).filter({
        id: parseInt(id)
      }).run()
   }
  }
  
 
  
  
}


