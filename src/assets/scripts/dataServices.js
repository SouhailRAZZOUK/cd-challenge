(function() {
  
  "use strict";
    
  usersServices.factory('Users', ['$resource', 
    function($resource) {
      return $resource('/users.json', {}, {
                query:{method:'GET', params:{ }, isArray: true}
              });
    }]);
  
  usersServices.factory('UserDetails', ['$resource', 
    function($resource) {
      return $resource('https://api.github.com/users', {}, {
                query:{method:'GET', params:{userLogin:"@login"}, isArray: true}
              });
    }]);
    
  usersServices.factory('UserFollowers', ['$resource', 
    function($resource) {
        return $resource('https://api.github.com/users/:userLogin/followers', {
                query:{method:'GET', params:{userLogin:"@login"}, isArray: true}
              });
    }]);

  usersServices.factory('UserFollowing', ['$resource', 
    function($resource) {
        return $resource('https://api.github.com/users/:userLogin/following', {
                query:{method:'GET', params:{userLogin:"@login"}, isArray: true}
              });
    }]);
    
})();