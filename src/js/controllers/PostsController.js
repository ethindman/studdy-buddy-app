app.controller('PostsController', function ($scope, $location, $routeParams, Auth, Post) {

  $scope.current_post = Post.getPost($routeParams.postID);

	$scope.createPost = function() {
    $scope.post.gravatar = Auth.user.password.profileImageURL;
		$scope.post.name = Auth.user.profile.full_name;
		$scope.post.poster = Auth.user.uid;

		Post.createPost($scope.post).then(function(ref) {
			console.log('Post successfully created!');
			$location.path('/');
		});
	};

  $scope.updatePost = function(post) {
    post.id = $routeParams.postID;

    Post.updatePost(post).then(function(ref) {

      console.log(ref);
      console.log('updated successfully');

      // $location.path('/');
    });
  };

});
