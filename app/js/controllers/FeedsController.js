app.controller('FeedsController', function($scope, $location, $routeParams, Post, Auth) {
  
  $scope.posts = Post.all;
  $scope.user = Auth.user;
  $scope.signedIn = Auth.signedIn;

  if(!Auth.signedIn()) {
    $location.path('/login');
  }

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