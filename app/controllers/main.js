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
app.factory('Auth', function($firebaseAuth, $firebaseArray, FURL) {
    
    var ref = new Firebase(FURL);
    var authRef = $firebaseAuth(ref);

    var Auth = {

        user: {},

        register: function(user) {
            return authRef.$createUser({
                email: user.email,
                password: user.password
            }).then(function() {                
                return Auth.login(user);
            }).then(function(data) {
                return Auth.createProfile(data.uid, user);
            });
        },

        login: function(user) {
            return authRef.$authWithPassword({
                email: user.email,
                password: user.password
            });
        },

        createProfile: function(uid, user) {
            var profile = {
                full_name: user.full_name,
                email: user.email
            };

            var profileRef = $firebaseArray(ref.child('profile').child(uid));
            
            return profileRef.$add(profile);
        }

    };

    return Auth;

});

// User Controller
app.controller('UserController', ['$scope', 'Auth',
    function ($scope, Auth) {

        // NEW USER
        $scope.register = function(user) {
            $scope.message = null;
            $scope.error   = null;

            Auth.register(user)
                .then(function(userData) {
                    $scope.message = "User created with uid: " + userData.uid;  
                }).catch(function(error) {
                    $scope.error = error;
                });
        };
    }
]);
