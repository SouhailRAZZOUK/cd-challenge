
(function () {
  "use strict";
    
  usersControllers.controller('userDetailsController', ['$scope', '$resource', '$location', '$routeParams', 'UserDetails', 'UserFollowers', 'UserFollowing', 'UserSocialNetwork', 
    function ($scope, $resource, $location, $routeParams, UserDetails, UserFollowers, UserFollowing, UserSocialNetwork) {

      $scope.user = {};
      
      UserDetails.query({userLogin:$routeParams.login}).$promise.then(function(data) {
        $scope.user.login = data[0].login;
        $scope.user.avatar_url = data[0].avatar_url;
        $scope.user.name = data[0].name;
      });
      
      $scope.user.followersList = [];
      $scope.user.followingList = [];

      console.log(typeof($scope.user.followersList));
      console.log(typeof($scope.user.followingList));
      
      UserFollowers.query({userLogin:$routeParams.login}).$promise.then(function(data) {
        // $scope.user.followersList = [];
        console.log(typeof($scope.user.followersList));
        angular.forEach(data, function (follower) {
          $scope.user.followersList.push(follower);
        });
      });
      
      UserFollowing.query({userLogin:$routeParams.login}).$promise.then(function(data) {
        // $scope.user.followingList = [];
        console.log(typeof($scope.user.followingList));
        angular.forEach(data, function (followed) {
          $scope.user.followingList.push(followed);
        });
      });
      
    }]);

})();
