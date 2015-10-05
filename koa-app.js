'use strict';

var koa = require('koa');
var koaBody = require('koa-body')();
var config = require('./config');
var serve = require('koa-static');
var app = koa();
var fs = require('fs');
var koa = require('koa');
var router = require('koa-router')();

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

router.get('/', function *(next) {
  this.body = yield readFileFunction(__dirname + '/client/app/index.html');
});

router.get('/test', require('./handler/test.js'));

app.use(router.routes());

var readFileFunction = function(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

module.exports = app;