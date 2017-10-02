'use strict';

var app = angular.module('pt.ptRegister', []);

app.controller('ptRegisterController', ['$scope', '$filter', '$http', '$location', function($scope, $filter, $http, $location){
	
	$scope.pt = { //setting optional fields to null
		address2:null, 
		phone:null,
		gym:null
	};

	$scope.registerPT = function(isValid){
		$scope.submitted = true;
		$scope.DUPLICATE_EMAIL = false;

		var pt = angular.copy($scope.pt);
		$scope.passwordNoMatch = (pt.password !== pt.passwordCopy);

		if(isValid && !$scope.passwordNoMatch){
			pt.dob = $filter('date')(pt.dob, 'yyyy-MM-dd');
			$http.post('ajax/ptsignup.php', {
				pt:pt
			}).then(function(response){
				if(response.data.message === "SUCCESS"){
					$location.path("/pt-profile");
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
			})

		}
	}
}]);