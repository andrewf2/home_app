

/**
 * @ngInject
 */
function MyHomeController($scope,HomeService,$rootScope,NgMap) {

  $scope.currentUser = window.currentUser
  

  HomeService.getMainImage(window.currentUser.homeId).then(function(data){
      $scope.home.image = data.$value
      console.log(data)
  })
    
  HomeService.find(window.currentUser.homeId).then(function(promise){
    window.currentUser.home = promise.data
    console.log(promise)
    $scope.home = promise.data
    
  })
  
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
  
}

window.app.controller('MyHomeController', MyHomeController);