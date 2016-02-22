'use strict';

var app = angular
    .module('sbApp', ['ngRoute', 'firebase'])
    
    .constant('FURL', 'https://sbapp01.firebaseio.com/')
    
    .config(function($locationProvider, $routeProvider) {
       $routeProvider
            
            .when('/', {
                templateUrl: 'html/home.html',
                controller: 'MainController'
            })

            //- User Routes
            .when('/profile', {
                templateUrl: 'html/profile.html',
                controller: 'MainController'
            })

            .when('/login', {
                templateUrl: 'html/login.html',
                controller: 'UserController'
            })

            .when('/register', {
                templateUrl: 'html/register.html',
                controller: 'UserController'
            })

            .otherwise({
                redirectTo: '/'
            });

        $locationProvider
            .html5Mode(true);
});
