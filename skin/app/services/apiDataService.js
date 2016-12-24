app.service('apiDataService', ['$http', function($http) {

  function _commonHttpCall(apiUrl){
    var httpOptions = {
      method: 'GET',
      url: '/api/' + apiUrl
    };

    return $http(httpOptions)
      .then(
        function successCallback(response) {
          return response.data
        },
        function errorCallback(response) {
        return response;  
        }
      );
  }

  // Returns Marxn Profile.
  function getMarsxnProfile() {
    var httpPromise = _commonHttpCall('marsxn');
    return httpPromise;
  }
  // Return Main
  function getMain(){
   var httpPromise = _commonHttpCall('main');
    return httpPromise; 
  }
  // Return Portfolio
  function getPortfolio(){
   var httpPromise = _commonHttpCall('portfolio');
    return httpPromise; 
  }

  return {
    getMarsxnProfile: getMarsxnProfile,
    getMain: getMain,
    getPortfolio: getPortfolio
  }
}]);