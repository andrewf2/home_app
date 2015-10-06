'use strict';
var r = require('rethinkdbdash')({
    pool: true
});
var koa = require('koa');
var koaBody = require('koa-body')();
var config = require('./config');
var serve = require('koa-static');
var router = require('koa-router')();
var app = koa();




app.use(function *(next) {
    var start = new Date();
    var err;

    try {
        yield next;
    }
    catch (e) {
        err = e;
    }

    var elapsed = new Date() - start;

    console.log('%s %s %s - %s', this.method, err ? 500 : this.res.statusCode, this.url, elapsed);

    if (err) throw err;
});

app.use(serve(__dirname + '/client/app'));

router.get('/test', require('./handler/test.js'));

router.get('/homes', function*(){
   this.body = yield r.db('home_owner_center').table('homes').run()
})

router.get('/homes/:id',function*(){
    var id = this.params.id
    this.body = yield r.db('home_owner_center').table("homes").filter({
      id: parseInt(id)
    }).run();
})

router.get('/users',function*(){
    this.body = yield r.db('home_owner_center').table('users').run()
})

router.get('/users/:id',function*(){
    var id = this.params.id
    this.body = yield r.db('home_owner_center').table("users").filter({
      id: parseInt(id)
    }).run();
})

app.use(router.routes());

module.exports = app;