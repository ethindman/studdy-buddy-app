'use strict';

var app = angular
    .module('sbApp', ['ngRoute', 'firebase'])
    
    .constant('FURL', 'https://sbapp01.firebaseio.com/')
    
    .config(function($locationProvider, $routeProvider) {
       $routeProvider
            
            .when('/', {
                templateUrl: 'html/home.html'
            })

            //- User Routes
            .when('/profile', {
                templateUrl: 'html/profile.html'
            })

            .when('/login', {
                templateUrl: 'html/login.html',
                controller: 'UserController'
            })

            .otherwise({
                redirectTo: '/'
            });

        $locationProvider
            .html5Mode(true);
});
