'use strict';

var app = angular.module('sbApp', ['ngRoute', 'ngCookies', 'firebase']);

app.config(function($locationProvider, $routeProvider) {

    // Routes
    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html'
        })
        .when('/topic', {
            templateUrl: 'html/topic.html'
        })
        .when('/post', {
            templateUrl: 'html/post.html'
        })
        .when('/profile', {
            templateUrl: 'html/profile.html'
        })
        .otherwise({
            redirectTo: '/',
        });
    $locationProvider
        .html5Mode(true);

});
