app.controller('FeedsController', function($scope, Post, Auth) {
  
  $scope.posts = Post.all;
  $scope.user = Auth.user;
  $scope.signedIn = Auth.signedIn;

});