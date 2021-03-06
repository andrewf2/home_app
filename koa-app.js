'use strict';
var koa = require('koa'),
koaBody = require('koa-body')(),
config = require('./config'),
serve = require('koa-static'),
router = require('koa-router')(),
Home = require('./model/home.js')(),
User = require('./model/user.js')(),
FloorPlan = require('./model/floorplan.js')(),
session = require('./auth/session.js')(),
Auth = require('./auth/Auth.js')(session),
cors = require('koa-cors'),
app = koa();

app.use(cors());

app.use(function*(next) {
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

router.get('/homes', function*() {
    var homes = yield Home.all()
    this.body = homes
})

router.get('/homes/:id', function*() {
    var id = this.params.id
    var home = yield Home.find(id);
    this.body = home
    console.log(home)
})

router.post('/homes', function*() {
    var home = this.request.body;
    this.body = yield Home.save(home)
})

router.get('/homes/address/:address', function*() {
    var address = decodeURI(this.params.address)
    this.body = yield Home.findBy("address", address);
})

router.put('/users/:id', function*() {
    var user = this.request.body;
    this.body = User.save(user)
})

router.post('/homes', function*() {
    var home = this.request.body
    console.log(home)
    this.body = yield Home.create(home);
})

router.get('/users', function*() {
    this.body = yield User.all()
})

router.get('/users/:id', function*() {
    var id = this.params.id
    this.body = yield User.find(id)
})

router.post('/users', function*() {
    var user = this.request.body
    this.body = User.create(user);
})

router.get('/users/email/:email', function*() {
    var email = this.params.email;
    this.body = yield User.findBy("emailAddress", email);
})

router.get('/floorplans', function*() {
    this.body = yield FloorPlan.all();

})

router.get('/floorplans/:id', function*() {
    var id = this.params.id;
    this.body = yield FloorPlan.find(id)
})

router.post('/floorplans', function*() {
    var floorplan = this.request.body;
    this.body = yield FloorPlan.create(floorplan)
})

router.put('/floorplans/:id', function*() {
    var floorplan = this.request.body;
    this.body = yield FloorPlan.save(floorplan)
})

router.delete('/session/:key', function*() {
    var user = yield User.findBy("key", this.params.key)
    user.key = null
    this.body = user;
})

router.post('/login', function*() {
    var loginPost = this.request.body;
    var creds = Auth.format(loginPost);
    var user = yield Auth.createSession(creds);
    this.body = user
})

router.delete('/homes/:id', function*(){
    var id = this.params.id
    var response = yield Home.destroy(id)
    this.body = response
})

router.delete('/users/:id', function*(){
    var id = this.params.id
    var response = yield User.destroy(id)
    this.body = response
})

router.delete('/floorplans/:id',function*(){
    var id = this.params.id
    var response = yield FloorPlan.destroy(id)
    this.body = response
})

app.use(router.routes());

module.exports = app;
