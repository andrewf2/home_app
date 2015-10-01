'use strict';

var http = require('http');
var koaApp = require('./koa-app');
var config = require('./config');

http.createServer(koaApp.callback()).listen(config.httpPort);

console.log(config.siteName + ' running on http port ' + config.httpPort);