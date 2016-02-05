var r = require('rethinkdbdash')({
    pool: true
});

module.exports = function(){
    var dbName = 'home_owner_center';
  return  {
    db:r.db(dbName),
    
    all: function*(callback){
      var query = yield r.db(dbName).table(this.tableName).run();
      return query;
    
      
   },
 
   find: function*(id){
     
     if(id != null){
        var query = yield r.db(dbName).table(this.tableName).filter({
       id: id
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
     console.log(queryObject)
     var query = yield r.db(dbName).table(this.tableName).filter(queryObject).run();
     return query[0]
   },
   
   destroy: function(id){
     return r.db(dbName).table(this.tableName).get(id).delete().run();
   },
   
   create: function(obj){
     return r.db(dbName).table(this.tableName).insert(obj).run();
   },
   
   join: function*(table){
    var tableName = this.tableName
    var query = yield r.db(dbName).table(tableName).concatMap(function(parent) {
	  return r.db(dbName).table(table).getAll(
		parent("id"),
		{ index:+"Id" }
	    ).map(function(child) {
		  return { child: child, parent: parent }
   	    })
      }).run()
   return query;
    
   },
  
   save: function(obj){
     return r.db(dbName).table(this.tableName).filter({id:obj.id}).update(obj).run()
    
   }
   
   
   
   
  
  }
}

