'use strict';

var app = angular.module('pt.ptProfile', []);

app.controller('ptProfileController', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http){
	$scope.fetchProfileData = function(){
		var id = $rootScope.key.id;

		$http.get('ajax/profiledata.php?type=pt&id=' + id)
		.then(function(response){
			$scope.profileData = response.data;
		})
	};

}]);