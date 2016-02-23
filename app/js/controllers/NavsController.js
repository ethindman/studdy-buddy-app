app.controller('NavsController', function($scope, $location, Auth) {

	$scope.currentUser = Auth.user;
	$scope.signedIn 	 = Auth.signedIn;

	$scope.logout = function() {
		Auth.logout();
		alert("Logout Successful!");
		$location.path('/');
	};

});
