myApp.controller('carDetailsController', ['$scope', '$routeParams', 'Service', function($scope, $routeParams, Service) {
    
    var carIndex = $routeParams.listIndex;
    $scope.carList = Service.getCarList();
    
    $scope.selectedCar = $scope.carList[carIndex];
  
}]);