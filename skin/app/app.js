// Marsxn app
var app = angular.module('marsxnApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'app/components/main/mainView.html',
    controller: 'mainController'
  })
  .when('/portfolio', {
    templateUrl: 'app/components/portfolio/portfolioView.html',
    controller: 'portfolioController'
  })
  .otherwise('/');
  // use the HTML5 History API
  $locationProvider.html5Mode(true);
});