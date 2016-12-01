'use strict';

var app = angular
    .module('sbApp', ['ngRoute', 'firebase'])

    .constant('FURL', 'https://sbapp01.firebaseio.com/')

    .config(function($locationProvider, $routeProvider) {
       $routeProvider

            //- Posts Routes
            .when('/', {
                templateUrl: 'views/posts/index.html',
                controller: 'FeedsController'
            })
            .when('/feed/:postId', {
                templateUrl: 'views/posts/show.html',
                controller: 'FeedsController'
            })
            .when('/newPost', {
                templateUrl: 'views/posts/new.html',
                controller: 'PostsController'
            })
            .when('/post/edit/:postID', {
                templateUrl: 'views/posts/edit.html',
                controller: 'PostsController'
            })

            //- User Routes
            .when('/profile', {
                templateUrl: 'views/profile.html',
                controller: 'AuthsController'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'AuthsController'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'AuthsController'
            })

            //- Else
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider
            .html5Mode(true);
});
