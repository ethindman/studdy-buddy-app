'use strict';

var app = angular
    .module('sbApp', ['ngRoute', 'firebase'])
    
    .constant('FURL', 'https://sbapp01.firebaseio.com/')
    
    .config(function($locationProvider, $routeProvider) {
       $routeProvider
            
            .when('/', {
                templateUrl: 'html/home.html',
                controller: 'FeedsController'
            })

            //- Post Routes
            .when('/newPost', {
                templateUrl: 'html/new-post.html',
                controller: 'PostsController'
            })

            //- User Routes
            .when('/profile', {
                templateUrl: 'html/profile.html',
                controller: 'AuthsController'
            })

            .when('/login', {
                templateUrl: 'html/login.html',
                controller: 'AuthsController'
            })

            .when('/register', {
                templateUrl: 'html/register.html',
                controller: 'AuthsController'
            })

            .otherwise({
                redirectTo: '/'
            });

        $locationProvider
            .html5Mode(true);
});
