'use strict';

var r = require('rethinkdbdash')({
    pool: true
});

var dummyData = require("../seed.js");




module.exports = function *() {
    try{
      
    }
    catch (e){
        console.log(e)
        
    }

    this.body = {
      users: yield r.db('home_owner_center').table('users').run(),
      homes: yield r.db('home_owner_center').table('homes').run()
      
    };
};