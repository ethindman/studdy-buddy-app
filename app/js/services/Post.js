app.factory('Post', function (FURL, $firebaseArray, Auth) {

	var user  = Auth.user;
	var ref = new Firebase(FURL);
	var posts = $firebaseArray(ref.child('posts').child(user.uid));

	var Post = {
		all: posts,
		
		createPost: function(post) {
			post.datetime = Firebase.ServerValue.TIMESTAMP;
			return posts.$add(post);
		}

	};

	return Post;

});