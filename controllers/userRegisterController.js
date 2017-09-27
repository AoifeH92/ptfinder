'use strict';

var app = angular.module('pt.userRegister', []);

app.controller('userRegisterController', ['$scope', '$filter', '$http', '$location', function($scope, $filter, $http, $location){
	$scope.user = {};

	$scope.userRegister = function(isValid){
		$scope.submitted = true;
		$scope.DUPLICATE_EMAIL = false;

		var user = angular.copy($scope.user);
		$scope.passwordNoMatch = (user.password !== user.passwordCopy);
		if(isValid && !$scope.passwordNoMatch){			
			user.dob = $filter('date')(user.dob, 'yyyy-MM-dd');
			$http.post('ajax/usersignup.php', {
				user: user
			}).then(function(response){
				if(response.data.message === "SUCCESS"){
					$location.path( "/user-profile");
				}
				else if(response.data.message === "DUPLICATE_EMAIL"){
					$scope.DUPLICATE_EMAIL = true;
				}
				else{
					alert("Something went wrong inserting data");
				}
			}, function(error){
				console.error(error);
				alert("Failed to insert data");
			});
		}
	};


}]);