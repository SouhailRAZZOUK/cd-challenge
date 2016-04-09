
(function () {
  "use strict";
    
  usersControllers.controller('userDetailsController', ['$scope', '$resource', '$location', '$routeParams', 'UserDetails', 'UserFollowers', 'UserFollowing', 
    function ($scope, $resource, $location, $routeParams, UserDetails, UserFollowers, UserFollowing) {

      $scope.user = {};
      
      UserDetails.query({userLogin:$routeParams.login}).$promise.then(function(data) {
        $scope.user.login = data.login;
        $scope.user.avatar_url = data.avatar_url;
        $scope.user.name = data.name;
        $scope.user.location = data.location;
        $scope.user.blog = data.blog;
        $scope.user.followers = data.followers;
        $scope.user.following = data.following;
      });
      
      $scope.user.followersList = [];
      $scope.user.followingList = [];
      
      UserFollowers.query({userLogin:$routeParams.login}).$promise.then(function(data) {
        angular.forEach(data, function (follower) {
          $scope.user.followersList.push(follower);
        });
      });
      
      UserFollowing.query({userLogin:$routeParams.login}).$promise.then(function(data) {
        angular.forEach(data, function (followed) {
          $scope.user.followingList.push(followed);
        });
      });
      
    }]);

})();
