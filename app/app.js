'use strict';

var app = angular
    .module('sbApp', [
        'ngRoute', 
        'ngCookies', 
        'firebase'
    ])
    .constant('FURL', 'https://sbapp1122.firebaseio.com/')  
    .config(function($locationProvider, $routeProvider) {
       $routeProvider
            .when('/', {
                templateUrl: 'html/home.html'
            })


            //- Study Buddy Routes
            .when('/topic', {
                templateUrl: 'html/topic.html'
            })
            .when('/create', {
                templateUrl: 'html/create.html'
            })



            //- User Routes
            .when('/profile', {
                templateUrl: 'html/profile.html'
            })

            //- CatchAll
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider
            .html5Mode(true);
});
