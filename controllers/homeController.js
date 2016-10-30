myApp.controller('homeController', ['$scope', 'Service', function($scope, Service) {
  
  $scope.carList = Service.getCarList();
  
}]);