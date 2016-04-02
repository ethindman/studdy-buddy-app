app.controller('AuthsController', function($scope, $location, $firebaseObject, FURL, Auth) {

  var ref = new Firebase(FURL);
  $scope.user = Auth.user;

  $scope.register = function(user) {
    Auth.register(user)
    .then(function(authData) {
      console.log('Registration successful!');
      $location.path('/profile');
    }).catch(function(error) {
      console.log('Oops! Something when wrong...');
      console.log(error);
    });
  };

  $scope.login = function(user) {
    Auth.login(user)
      .then(function(authData) {
        console.log('Login successful!');
        $location.path('/feed');
      }).catch(function(error) {        
        console.log('Oops! Please check your email or password and try again...');
        console.log(error);
    });   
  };

});
