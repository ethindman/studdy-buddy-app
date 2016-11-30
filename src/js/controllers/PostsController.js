app.controller('PostsController', function ($scope, $location, Auth, Post) {

	$scope.createPost = function() {
    $scope.post.gravatar = Auth.user.password.profileImageURL;
		$scope.post.name = Auth.user.profile.full_name;
		$scope.post.poster = Auth.user.uid;

		Post.createPost($scope.post).then(function(ref) {
			console.log('Post successfully created!');
			$location.path('/');
		});
	};

  $scope.editPost = function(post) {
    Post.editPost(post).then(function(ref) {
      $location.path('/');
    });
  };

});
