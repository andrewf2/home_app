'use strict';  

/**
 * @ngInject
 */
function navBar() {

  return {
    restrict: 'E',
    scope: {
      company: '='
    },
    templateUrl:'../views/partials/index/_navbar.html'
  };
}

window.app.directive('navBar', navBar);