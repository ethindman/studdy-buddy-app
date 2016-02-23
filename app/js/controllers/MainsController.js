'use strict';

app.controller('MainsController', ['$scope', 'FURL', 'Auth', '$firebaseObject', 
    function ($scope, FURL, Auth, $firebaseObject) {
    
        var ref = new Firebase(FURL);

        $scope.date = moment().format('MMMM Do, YYYY');
        $scope.user = Auth.user;
        
    }
]);