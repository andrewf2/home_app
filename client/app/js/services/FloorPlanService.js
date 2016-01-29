function FloorPlanService($http,$firebaseObject,BaseURL,CrudService,FirebaseImgService){
  this.resource = "floorplans"
  

  angular.extend(FloorPlanService.prototype, CrudService);
  
  angular.extend(FloorPlanService.prototype, FirebaseImgService);
  

}

window.app.service('FloorPlanService', FloorPlanService)