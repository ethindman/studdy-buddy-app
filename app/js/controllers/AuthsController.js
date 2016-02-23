'use strict';

app.controller('AuthsController', function($scope, $location, $firebaseObject, FURL, Auth) {

    var ref = new Firebase(FURL);

    $scope.register = function(user) {
        Auth.register(user)
            .then(function(userData) {
                console.log("Successfully registered");
                $location.path('/profile');
            }).catch(function(error) {
                console.log(error); 
            });
    };

    $scope.login = function(user) {
        Auth.login(user)
          .then(function(authData) {
            $location.path('/');
          }, function(err) {        
            console.log(err);
        });   
    };

});