'use strict';

var koa = require('koa');
var koaBody = require('koa-body')();
var config = require('./config');
var serve = require('koa-static');
var fs = require('fs');
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

app.use(router.routes());

module.exports = app;