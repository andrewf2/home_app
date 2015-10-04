'use strict';

var http = require('http');
var koaApp = require('./koa-app');
var config = require('./config');

http.createServer(koaApp.callback()).listen(8080);

console.log(config.siteName + ' running on http port ' + config.httpPort);