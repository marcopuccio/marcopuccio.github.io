// Header Controller
app.controller('indexController', ['$scope', 'apiDataService', function ($scope, apiDataService) {
  apiDataService.getMarsxnProfile().then(function(data) {
    $scope.marsxn = data;
  });
}]);