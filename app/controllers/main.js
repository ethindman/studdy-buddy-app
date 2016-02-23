'use strict';

app.controller('MainController', ['$scope', 'FURL', 'Auth', '$firebaseObject', 
    function ($scope, FURL, Auth, $firebaseObject) {
    
        var ref = new Firebase(FURL);

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
            var date = moment().format('MMMM Do, YYYY');
            
            var profile = {
                full_name: user.full_name,
                email: user.email,
                joined_date: date
            };

            var profileRef = ref.child('profile').child(uid);
            
            return profileRef.set(profile);
        },

        logout: function() {
          authRef.$unauth();
          console.log("logged out");
        },

        signedIn: function() {
          return !!Auth.user.provider;
        }

    };

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

    Auth.signedIn();

    return Auth;

});

// User Controller
app.controller('UserController', function($scope, $location, $firebaseObject, FURL, Auth) {

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
