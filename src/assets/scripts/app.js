var myApp = angular.module("churchdeskchallenge", ['winjs', 'ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {                        
  $routeProvider                                                                
    .when('/', {                                            
      templateUrl: "users.html",                                               
      controller:'usersCtrl',                                
    })
    .when('/user/:login', {                                            
      templateUrl: "user.html",                                               
      controller:'userCtrl',                                
    })                                                                 
    .otherwise({                      
        template: '<h1 class="win-h1">404</h1>'   
    });      
  $locationProvider.html5Mode(true);
});