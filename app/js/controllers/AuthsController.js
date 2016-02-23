app.controller('AuthsController', function($scope, $location, $firebaseObject, FURL, Auth) {

    var ref = new Firebase(FURL);

    $scope.register = function(user) {
        Auth.register(user)
        .then(function(authData) {
            $location.path('/profile');
        }).catch(function(error) {
            console.log(error); 
        });
    };

    $scope.login = function(user) {
        Auth.login(user)
        .then(function(authData) {
            alert("Sign in Successful");
            $location.path('/profile');
        }).catch(function(error) {        
            console.log(error);
        });   
    };

});
