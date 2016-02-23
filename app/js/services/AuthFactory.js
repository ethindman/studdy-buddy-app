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
        },

        signedIn: function() {
          if(Auth.user.provider) {
            return true;
            } else {
                return false;
            }
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

    return Auth;

});
