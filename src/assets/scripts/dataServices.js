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
      return $resource('/users.json', {}, {
                query:{method:'GET', params:{userLogin:"@login"}, isArray: true}
              });
    }]);
    
  usersServices.factory('UserFollowers', ['$resource', 
    function($resource) {
        return $resource('/followers.json', {
                query:{method:'GET', params:{userLogin:"@login"}, isArray: true}
              });
    }]);

  usersServices.factory('UserFollowing', ['$resource', 
    function($resource) {
        return $resource('/following.json', {
                query:{method:'GET', params:{userLogin:"@login"}, isArray: true}
              });
    }]);
    
  usersServices.factory('UserSocialNetwork', ['$resource', 
    function($resource) {
      var socials = {},
          srvc = $resource('/:socialType.json', {
              query:{method:'GET', params:{socialType:"@followers"}, isArray: true}
            });
            
        socials.followersList = [];
        socials.followingList = [];
        
        srvc.query({socialType:'followers'}).$promise.then(function(data) {
          socials.followersList = data;
        });
        
        srvc.query({socialType:'following'}).$promise.then(function(data) {
          socials.followingList = data;
        });
        
        return socials;
    }]);
})();

/*

app.factory('NoteResource', ['$resource',
  function($resource) {
    var res =  $resource('http://okigan.apiary.io/notes/:id', {}, {
      query: {
        method: 'GET',
        params: {
        },
        isArray: true,
        transformResponse: function(data, header){
          //Getting string data in response
          var jsonData = JSON.parse(data); //or angular.fromJson(data)
          var notes = [];

          angular.forEach(jsonData, function(item){
            var note = new Note();
            note.noteTitle = item.title;  
            notes.push(note);
          });

          return notes;
        }
      }
    });
    return res;
  }
]);

 */