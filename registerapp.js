var validationApp = angular.module('validationApp', []);
validationApp.controller('mainController', function($scope , $http) {
		
		
	$scope.Register = function() {
    $http.post("abc.json",{
		'id': $scope.id,
		'name': $scope.name,
		'email': $scope.email,
		'phone': $scope.phone
	})
    .success(function(response) {
        $scope.usersData = response.users;
        });
    };
	
	
	
	
	
	
	
	
	
	// $scope.formDetail = {};

    /*$scope.formDetail = {
        FirstName: 'mukund',
        username: 'mukund123',
        email: 'mukund@gmail.com'
    }
   var jsondata=  JSON.stringify($scope.formDetail);

    // $scope.submitForm = function() {
    //     if ($scope.userForm.$valid) {
    //         alert('our form is validate');
    //     }

    // };
    $scope.postdata= function(){
         $http({
        method : "POST",
        data:jsondata,
        url : "abc.json"
    }).then(function mySuccess(data) {
        var ff={};
        ff=data;

        alert('save success');
    }, function myError(response) {
        alert('error');
    });
    }*/

});
