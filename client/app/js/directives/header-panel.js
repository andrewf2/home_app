'use strict';  

/**
 * @ngInject
 */
function headerPanel() {

  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    templateUrl:'../views/partials/user/_header.html'
  };
}

window.app.directive('headerPanel', headerPanel);