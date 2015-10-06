'use strict';

var r = require('rethinkdbdash')({
    pool: true
});

var dummyData = require("../seed.js");




module.exports = function *() {
    try{
      var hoc = r.db('home_owner_center');
      yield hoc.table('users').delete().run();
      yield hoc.table('homes').delete().run();
      yield hoc.table('users').insert(dummyData.customer).run();
      yield hoc.table('users').insert(dummyData.customer2).run();
      yield hoc.table('users').insert(dummyData.builder).run();
      yield hoc.table('homes').insert(dummyData.house).run();
      yield hoc.table('homes').insert(dummyData.house2).run();
    }
    catch (e){
        console.log(e)
        
    }

    this.body = {
      users: yield r.db('home_owner_center').table('users').run(),
      homes: yield r.db('home_owner_center').table('homes').run()
      
    };
};