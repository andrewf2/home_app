'use strict';

var r = require('rethinkdbdash')({
    pool: true
});

module.exports = function *() {

    var response;
    try {
        response = yield r.dbCreate('testDb').run();
    }
    catch (error) {
        // db prolly ardy exists
    }

    var dbList = yield r.dbList().run();

    this.body = {dbList: dbList};
};