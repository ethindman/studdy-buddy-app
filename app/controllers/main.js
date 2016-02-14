'use strict';

app.controller('MainController', ['$scope', '$location', '$firebaseObject', '$firebaseArray', function ($scope, $location, $firebaseObject, $firebaseArray) {
    
    // Setup Firebase base reference
    var ref = new Firebase('https://sbapp1122.firebaseio.com/');

    // Create date string
    // $scope.date = moment().format('MMMM Do, YYYY');

    // Login User
    var user = ref.child('users').child('ethindman');
    var syncUser = $firebaseObject(user);
    syncUser.$bindTo($scope, "user");

    // var buddies = ref.child('buddies').child('ethindman');
    // var syncBuddy = $firebaseObject(buddies);
    // syncBuddy.$bindTo($scope, "buddies");


    // BUDDY LOGIC
    var buddies = ref.child('buddies').child('ethindman');
    var data = $firebaseArray(buddies);

    $scope.createBuddy = function(buddy) {
        buddy.created_on = Firebase.ServerValue.TIMESTAMP;
        return data.$add(buddy);
    }
    
}]);
