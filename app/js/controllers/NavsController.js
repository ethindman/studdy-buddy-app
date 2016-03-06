app.controller('NavsController', function ($scope, $location, FURL, Auth) {

	$scope.signedIn = Auth.signedIn;
	
	$scope.logout = function() {
		Auth.logout();
		ohSnap('Logout Successful!', {color: 'green', icon: 'icon-alert'});
		$location.path('/');
	};

});
