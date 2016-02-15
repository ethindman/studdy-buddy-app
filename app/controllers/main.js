'use strict';

app.controller('MainController', ['$scope', 'FURL', 'Auth', '$firebaseObject', 
    function ($scope, FURL, Auth, $firebaseObject) {
    
        // Firebase Config
        var ref = new Firebase(FURL);

        // Store Date
        $scope.date = moment().format('MMMM Do, YYYY');

        // Get User
        var user = ref.child('users').child('ethindman');
        var syncUser = $firebaseObject(user);
        syncUser.$bindTo($scope, "user");

    }
]);

// Factory for generating re-useable $firebaseAuth instance
app.factory("Auth", ["$firebaseAuth", "FURL",
  function($firebaseAuth, FURL) {
    var ref = new Firebase(FURL);
    return $firebaseAuth(ref);
  }
]);

// User Controller
app.controller('UserController', ['$scope', 'Auth',
    function ($scope, Auth) {

        // NEW USER
        $scope.register = function() {
            $scope.message = null;
            $scope.error   = null;

            Auth.$createUser({
                full_name: $scope.full_name,
                email: $scope.email,
                password: $scope.password
            }).then(function(userData) {
                $scope.message = "User created with uid: " + userData.uid;  
            }).catch(function(error) {
                $scope.error = error;
            });
        };

    }
]);
