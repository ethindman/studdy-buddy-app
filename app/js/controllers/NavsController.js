app.controller('NavsController', function ($scope, $location, FURL, Auth) {

	var ref = new Firebase(FURL);

	$scope.signedIn = Auth.signedIn;
	
	$scope.logout = function() {
		Auth.logout();
		alert("Logout Successful!");
		$location.path('/');
	};

});
