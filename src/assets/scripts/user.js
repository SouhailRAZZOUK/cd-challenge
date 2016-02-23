
(function () {
  "use strict";
    
  // var myApp = angular.module("churchdeskchallenge", ['winjs']);

  myApp.controller('UserCtrl', function ($scope, $http) {

    $scope.user = {};
    
    $http.get('https://api.github.com/')
       .then(function(res){
          $scope.user = res.data;                
        });

  });

})();
