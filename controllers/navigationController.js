'use strict';

var app = angular.module('pt.navigation', []);

app.controller('navigationController', ['$rootScope', '$scope', 'localStorageService', '$location', function($rootScope, $scope, localStorageService, $location){
	
	$rootScope.key = localStorageService.cookie.get('sessionKey');
	$scope.username = ($rootScope.key) ? $rootScope.key.name : null;

	$scope.signout = function(){
		localStorageService.cookie.remove('sessionKey');
		$rootScope.key = null;
		$location.path('/home');
	};

	$scope.$on('newSession', function(){
		$rootScope.key = localStorageService.cookie.get('sessionKey');
		$scope.username = $scope.key.name;
	});

}]);