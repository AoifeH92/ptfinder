'use strict';

var app = angular.module('pt.login', []);

app.controller('loginController', ['$rootScope', '$scope', '$route', '$http', '$location', 'localStorageService', function($rootScope, $scope, $route, $http, $location, localStorageService){
	var stateParams = $route.current.$$route.stateParams;
	$scope.loginType = (stateParams['type'] != undefined) ? stateParams['type'] : 'user';

	$scope.login = function(isValid){
		$scope.submitted = true;
		if(isValid){
			$http.post('ajax/login.php', {
				login:{
					email: $scope.email,
					password: $scope.password,
					loginType: $scope.loginType
				}
			}).then(function(response){
				if(response.data['id']){
					var id = response.data['id'];
					var name = response.data['firstname'] + " " + response.data['lastname'];
					
					if($scope.loginType === 'pt'){
						$location.path('/pt-profile');
						localStorageService.cookie.set('sessionKey', {id: id, type:'pt', name: name}, 1);
						$rootScope.$broadcast('newSession');
					}
					else{
						$location.path('/user-profile');
						localStorageService.cookie.set('sessionKey', {id: id, type:'user', name: name}, 1);
						$rootScope.$broadcast('newSession');
					}
				}
				else{
					console.log(response.data['error']);
				}
			}, function(error){
				console.error(error);
			})
		}
	}
}]);