'use strict';  

/**
 * @ngInject
 */
function navBar($rootScope) {

  return {
    restrict: 'E',
    scope: {
      company: '=',
      logout: '='
    },
    templateUrl:'../views/partials/index/_navbar.html'
  };
}

window.app.directive('navBar', navBar);