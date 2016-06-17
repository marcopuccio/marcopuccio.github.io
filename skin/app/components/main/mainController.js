// Header Controller
app.controller('mainController', ['$scope', 'apiDataService', function ($scope, apiDataService) {
  // Scope Data.
  apiDataService.getMainExcerpt().then(function(data) {
    $scope.main  = data;
  });

}]);


