app.controller('NavsController', function ($scope, $location, FURL, Auth) {

	$scope.signedIn = Auth.signedIn;
	
	$scope.logout = function() {
		Auth.logout();
		console.log('Logout successful!');
		$location.path('/login');
	};

});
