'use strict';

var koa = require('koa');
var koaBody = require('koa-body')();
var config = require('./config');
var serve = require('koa-static');
var app = koa();
var fs = require('fs');
var koa = require('koa');
var Router = require('koa-router');

var router = new Router();

router.get('/', function *(next) {
  this.body = yield readFileThunk(__dirname + '/client/app/index.html');
});


app.use(router.routes());

var readFileThunk = function(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
}





 

module.exports = app;