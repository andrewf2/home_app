'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('./templates');
require('./controllers/_index');
require('./services/_index');
require('./directives/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',
    'app.controllers',
    'app.services',
    'app.directives'
  ];

  // mount on window for testing
  window.app = angular.module('home_owner_center', requires);

  angular.module('home_owner_center').constant('AppSettings', require('./constants'));

  angular.module('home_owner_center').config(require('./on_config'));

  angular.module('home_owner_center').run(require('./on_run'));

  angular.bootstrap(document, ['home_owner_center']);

});