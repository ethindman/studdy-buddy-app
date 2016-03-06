app.controller('AuthsController', function($scope, $location, $firebaseObject, FURL, Auth) {

    var ref = new Firebase(FURL);
    $scope.user = Auth.user;

    $scope.register = function(user) {
        Auth.register(user)
        .then(function(authData) {
            toastr.success('Registration successful!');
            $location.path('/profile');
        }).catch(function(error) {
            toastr.error('Oops! Something when wrong...');
            console.log(error);
        });
    };

    $scope.login = function(user) {
        Auth.login(user)
        .then(function(authData) {
            toastr.success('Login successful!');
            $location.path('/profile');
        }).catch(function(error) {        
            toastr.error('Oops! Something when wrong...');
            console.log(error);
        });   
    };

});
