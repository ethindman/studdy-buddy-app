app.controller('AuthsController', function($scope, $location, $firebaseObject, FURL, Auth) {

    var ref = new Firebase(FURL);
    $scope.user = Auth.user;

    $scope.register = function(user) {
        Auth.register(user)
        .then(function(authData) {
            ohSnap('Succesfully registered!', {color: 'green', icon: 'icon-alert'});
            $location.path('/profile');
        }).catch(function(error) {
            console.log(error); 
        });
    };

    $scope.login = function(user) {
        Auth.login(user)
        .then(function(authData) {
            ohSnap('Signed in!', {color: 'green', icon: 'icon-alert'});
            $location.path('/profile');
        }).catch(function(error) {        
            console.log(error);
        });   
    };

});
