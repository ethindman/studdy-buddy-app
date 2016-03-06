app.controller('FeedsController', function($scope, Post, Auth) {
  
  $scope.posts = Post.all;
  $scope.user = Auth.user;
  $scope.signedIn = Auth.signedIn;

  // POST FUNCTIONS
  // ==============
  
  $scope.deletePost = function(postId) {
    Post.deletePost(postId).then(function(){
      toastr.success('Post successfully deleted!');
    });
  }

});