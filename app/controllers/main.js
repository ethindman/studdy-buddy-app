'use strict';

app.controller('MainController', ['$scope', '$location', '$cookies', '$firebaseObject', function ($scope, $location, $cookies, $firebaseObject) {
    
    // Setup Firebase base reference
    var ref = new Firebase('https://<<yourappurl>>.firebaseio.com/');

    // Create date string
    $scope.date = moment().format('MMMM Do, YYYY');

    // $scope.getUser = function() {
        var user = ref.child('users').child('ethindman');

        var syncUser = $firebaseObject(user);

        syncUser.$bindTo($scope, "user");
    // }

}]);
