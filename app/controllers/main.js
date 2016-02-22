'use strict';

app.controller('MainController', ['$scope', 'FURL', 'Auth', '$firebaseObject', 
    function ($scope, FURL, Auth, $firebaseObject) {
    
        // Firebase Config
        var ref = new Firebase(FURL);

        // Store Date
        $scope.date = moment().format('MMMM Do, YYYY');

        $scope.user = Auth.user;
    }
]);

app.factory('Auth', function($firebaseAuth, $firebaseArray, $firebaseObject, FURL) {
    
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
                console.log(data.uid);
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

            var profileRef = $firebaseArray(ref.child('profile'));
            
            return profileRef.$add(profile);
        },

        logout: function() {
          authRef.$unauth();
          console.log("logged out");
        },

    };

    // Auth.logout();

    authRef.$onAuth(function(authData) {
        if(authData) {      

        angular.copy(authData, Auth.user);
        Auth.user.profile = $firebaseObject(ref.child('profile').child(authData.uid));

        } else {
            if(Auth.user && Auth.user.profile) {
                Auth.user.profile.$destroy();
            }
            angular.copy({}, Auth.user);
        }
    });

    return Auth;

});

// User Controller
app.controller('UserController', function($scope, $location, $firebaseObject, FURL, Auth) {

    var ref = new Firebase(FURL);

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

    $scope.login = function(user) {
        Auth.login(user)
          .then(function(authData) {
            
            // var user = ref.child('profile').child(authData.uid);
            // $firebaseObject(user).$bindTo($scope, "profile");
            $location.path('/');
       
          }, function(err) {        
            console.log(err);
        });   
    };

});
