app.factory('Post', function (FURL, $firebaseArray, Auth) {

	var firebaseRef = new Firebase(FURL);
	var posts = $firebaseArray(firebaseRef.child('posts'));
	var user  = Auth.user;

	var Post = {
		
		all: posts,

		createPost: function(post) {
			post.datetime = Firebase.ServerValue.TIMESTAMP;
			return posts.$add(post);
		}

	};

	return Post;

});