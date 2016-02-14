'use strict';

app.controller('MainController', ['$scope', '$location', '$cookies', '$firebaseObject', '$firebaseArray', function ($scope, $location, $cookies, $firebaseObject, $firebaseArray) {
    
    // Setup Firebase base reference
    var ref = new Firebase('https://sbapp1122.firebaseio.com/');

    // Create date string
    $scope.date = moment().format('MMMM Do, YYYY');

    $scope.tempcoverimage = "https://static.pexels.com/photos/45917/pexels-photo-45917-large.jpeg"

    // Login User
    var user = ref.child('users').child('ethindman');
    var syncUser = $firebaseObject(user);
    syncUser.$bindTo($scope, "user");

    var buddies = ref.child('buddies').child('ethindman');
    var syncBuddy = $firebaseObject(buddies);
    syncBuddy.$bindTo($scope, "buddies");

    $scope.createBuddy = function() {
        alert("got here");
    }
    
}]);
