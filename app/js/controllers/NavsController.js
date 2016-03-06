app.controller('NavsController', function ($scope, $location, FURL, Auth) {

	$scope.signedIn = Auth.signedIn;
	
	$scope.logout = function() {
		Auth.logout();
		toastr.success('Logout successful!');
		$location.path('/');
	};

});
