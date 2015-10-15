var r = require('rethinkdbdash')({
    pool: true
});

module.exports = function(){
  return  {
    db:r.db('home_owner_center'),
    
    all: function(){
      return  r.db('home_owner_center').table(this.tableName).run()
   },
 
   find: function*(id){
     var query = yield r.db('home_owner_center').table(this.tableName).filter({
        id: parseInt(id)
      }).run()
      return query[0]
   },
   
   destroy: function(id){
     return r.table("users")
    .filter(r.row("id").lt(parseInt(id)))
    .delete()
   }
   
  }
  
}


