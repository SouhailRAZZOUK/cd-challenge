
(function () {
  "use strict";
    
  // var myApp = angular.module("churchdeskchallenge", ['winjs']);

  myApp.controller('usersCtrl', function ($scope, $http, $location) {

    $scope.users = [];
    $scope.getUserDetails = function (userLogin){
       $location.path("/user/"+ $scope.selection.login);
    }
    
    $http.get('https://api.github.com/users')
       .then(function(res){
          $scope.users = res.data;                
        });

  });

})();
