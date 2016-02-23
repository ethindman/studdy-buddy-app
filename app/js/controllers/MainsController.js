app.controller('MainsController', function ($scope, FURL, Auth) {

	var ref = new Firebase(FURL);

	$scope.user = Auth.user;
		
});
