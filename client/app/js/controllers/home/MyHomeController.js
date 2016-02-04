

/**
 * @ngInject
 */
function MyHomeController($scope,HomeService,$rootScope,NgMap,FloorPlanService) {

  $scope.currentUser = window.currentUser
  $scope.home = {}
  console.log($scope.currentUser)

  
    
  HomeService.find(window.currentUser.homeId).then(function(promise){
    window.currentUser.home = promise.data
    console.log(promise)
    $scope.home = promise.data
    HomeService.getImage(window.currentUser.homeId).then(function(data){
      if(data.$value != null){
        $scope.home.image = data.$value
      }else{
        FloorPlanService.getImage($scope.home.floorplanId).then(function(data){
          $scope.home.image = data.$value
          console.log("default image")
          FloorPlanService.find($scope.home.floorplanId).then(function(data){
            console.log(data)
          })
        })
      }
    })
  })
  
  
  
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
  
}

window.app.controller('MyHomeController', MyHomeController);