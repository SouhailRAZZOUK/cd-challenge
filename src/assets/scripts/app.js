var myApp = angular.module("churchdeskchallenge", ['winjs', 'ngRoute', 'usersControllers', 'usersServices']);
var usersServices = angular.module("usersServices", ['ngResource']);
var usersControllers = angular.module("usersControllers", ['ngRoute']);


myApp.config(function($routeProvider, $locationProvider) {                        
  $routeProvider                                                                
    .when('/', {                                            
      templateUrl: "users.html",                                               
      controller:'usersListController',                                
    })
    .when('/user/:login', {
      templateUrl: "user.html",
      controller:'userDetailsController',                                
    })                                                                 
    .otherwise({                      
        template: '<h1 class="win-h1">404</h1>'   
    });      
  $locationProvider.html5Mode(true);
});

