// Header Controller
app.controller('mainController', ['$scope', 'apiDataService', function ($scope, apiDataService) {
  // Scope Data.
  apiDataService.getMain().then(function(data) {
    $scope.main  = data;
  });

}]);


