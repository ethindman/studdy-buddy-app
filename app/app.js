'use strict';

var app = angular.module('sbApp', ['ngRoute', 'ngCookies', 'firebase']);

app.config(function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode({
        enabled: true
    });

    // Routes
    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html'
        })
        .when('/about', {
            templateUrl: 'html/about.html'
        })
        .when('/settings', {
            templateUrl: 'html/settings.html'
        })
        .when('/profile', {
            templateUrl: 'html/profile.html'
        })
        .otherwise({
            redirectTo: '/',
        });
});
