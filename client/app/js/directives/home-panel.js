'use strict';  

/**
 * @ngInject
 */
function homePanel() {

  return {
    restrict: 'E',
    scope: {
      home: '='
    },
    templateUrl:'../views/partials/home/_main.html'
  };

}

window.app.directive('homePanel', homePanel);