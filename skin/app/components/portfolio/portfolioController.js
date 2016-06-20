// Header Controller
app.controller('portfolioController', ['$scope', 'apiDataService', function ($scope, apiDataService) {
  // Scope Data.
  apiDataService.getPortfolio().then(function(data) {
    $scope.portfolio  = data;
  });
}]);