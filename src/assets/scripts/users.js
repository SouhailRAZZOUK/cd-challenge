(function () {
  "use strict";
    

  usersControllers.controller('usersListController', ['$scope', '$location', 'Users', function ($scope, $location, Users) {

    $scope.users = [];
    
    $scope.getUserDetails = function (userLogin){
       $location.path("/user/"+ userLogin);
    }
    
    Users.query().$promise.then(function(data){
        $scope.users = data;                
      });;

  }]);

})();
