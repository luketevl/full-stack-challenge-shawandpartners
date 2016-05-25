(function(){
  'use strict';
  angular.module('app').controller('AppCtrl', AppCtrl);

  // injector
  AppCtrl.$inject = ['$scope', '$http'];

  // Controller
  function AppCtrl($scope, $http){
    // Control the message
    $scope.isPalindrome = true;

    // Request for API
    $scope.checkContent = function(val){

      // Request
      $http.get("http://localhost:3000/v1/isPalindrome/"+ val).then(function(response){

        // VALIDATE RESPONSE BYE API
        $scope.isPalindrome = (response.status == 200);
      }, function(error){
        console.log(error);
      });
    };
  }
})();
