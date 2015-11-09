'use strict';
var r = require('rethinkdbdash')({
    pool: true
});
var koa = require('koa');
var koaBody = require('koa-body')();
var config = require('./config');
var serve = require('koa-static');
var router = require('koa-router')();
var Home = require('./model/home.js')();
var User = require('./model/user.js')();
var Auth = require('./auth/Auth.js')()
var app = koa();
var fs = require('fs');

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
app.use(koaBody)

app.use(serve(__dirname + '/client/app'));


router.get('/myHome',function*(){
  this.body = yield render(__dirname + '/client/app/client_index.html');
})

router.get('/admin',function*(){
   this.body =  yield render(__dirname + '/client/admin/index.html');
})


router.get('/homes', function*(){
   this.body = yield Home.all()
})

router.get('/homes/:id',function*(){
    var id = this.params.id
    var home = yield Home.find(id);
    home.customers = yield Home.getCustomers(id)
    this.body = home
    console.log(home)
 
})

router.get('/users',function*(){
    this.body = yield User.all()
})

router.get('/users/:id',function*(){
    var id = this.params.id
    this.body = yield User.find(id)
})

router.post('/login',function*(){
    var loginPost = this.request.body;
    var creds = Auth.format(loginPost);
    var user = yield Auth.createSession(creds);
    console.log("authenticated"+ user)
    if (user.role == "customer"){
      this.redirect('/myHome');
    }
    else if(user.role == 'admin'){
      this.redirect('/admin')   
    }
})

app.use(router.routes());

module.exports = app;

var render = function(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
}
