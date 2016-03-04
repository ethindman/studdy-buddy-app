app.factory('Post', function (FURL, Auth, $firebaseArray) {

	var ref = new Firebase(FURL);
	var posts = $firebaseArray(ref.child('posts').child(Auth.user.uid));
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