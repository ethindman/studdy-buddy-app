app.controller('FeedsController', function($scope, $routeParams, Post, Auth) {
  
  $scope.posts = Post.all;
  $scope.user = Auth.user;
  $scope.signedIn = Auth.signedIn;

  if($routeParams.postId) {
    $scope.post = Post.getPost($routeParams.postId);
  }

  // POST FUNCTIONS
  // ==============
  
  $scope.deletePost = function(postId) {
    Post.deletePost(postId).then(function(){
      toastr.success('Post successfully deleted!');
    });
  }

});