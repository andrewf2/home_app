'use strict';

var koa = require('koa');
var router = require('koa-router')();
var koaBody = require('koa-body')();
var config = require('./config');

var koaStatic = require('koa-static');

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

app.use(router.routes());

router.get('/', require('./handler/test'));

module.exports = app;