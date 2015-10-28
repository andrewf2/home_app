var r = require('rethinkdbdash')({
    pool: true
});

module.exports = function(){
  return  {
    db:r.db('home_owner_center'),
    
    all: function(){
      return  r.db('home_owner_center').table(this.tableName).run();
   },
 
   find: function*(id){
     
     if(id != null){
       var query = yield r.db('home_owner_center').table(this.tableName).filter({
       id: parseInt(id)
     }).run();
      return query[0]
     }
     
     else{
       console.log('Must give a valid id')
     }
     
   },
   
   findBy: function*(attr,val){
     var queryObject = {}
     queryObject[attr] = val
     var query = yield r.db('home_owner_center').table(this.tableName).filter(queryObject).run();
     return query
   },
   
   destroy: function(id){
     return r.db('home_owner_center').table(this.tableName).get(id).delete().run();
   },
   
   create: function(obj){
      r.db('home_owner_center').table(this.tableName).insert(obj).run();
   },
   
   join: function*(table){
    var tableName = this.tableName
    var query = yield r.db('home_owner_center').table(tableName).concatMap(function(parent) {
	  return r.db('home_owner_center').table(table).getAll(
		parent("id"),
		{ index:+"Id" }
	    ).map(function(child) {
		  return { child: child, parent: parent }
   	    })
      }).run()
   return query;
    
   },
  
   save: function(id,obj){
     r.db('home_owner_center').table(this.tableName).filter(
     r.row("id").eq(id)
   ).update(obj)
   }
   
   
  }
  
}


