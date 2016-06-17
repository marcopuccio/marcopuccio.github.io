app.service('apiDataService', ['$http', '$q', function($http, $q) {

  function _commonHttpCall(apiUrl){
    var defered = $q.defer();
    
    $http.get('/api/' + apiUrl)
      .success(function(data) {
        defered.resolve(data);
      })
      .error(function(err) {
        defered.resolve(err); 
      });

    return defered.promise;
  }

  // Returns Marxn Profile.
  function getMarsxnProfile() {
    var httpPromise = _commonHttpCall('marsxn');
    return httpPromise;
  }
  // Return Main
  function getMainExcerpt(){
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
    getMainExcerpt: getMainExcerpt,
    getPortfolio: getPortfolio
  }
}]);