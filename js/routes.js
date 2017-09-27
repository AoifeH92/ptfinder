'use strict';

var app = angular.module('pt.routes', []);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$locationProvider.hashPrefix('');

	$routeProvider.when('/home', {
		templateUrl: 'html/home.html',
		controller: 'homeController'
	});

	$routeProvider.when('/pt-signup', {
		templateUrl: 'html/pt-signup.html',
		controller: 'ptRegisterController'
	});

	$routeProvider.when('/pt-profile', {
		templateUrl: 'html/pt-profile.html'
	});

	$routeProvider.when('/user-signup', {
		templateUrl: 'html/user-signup.html',
		controller: 'userRegisterController'
	});

	$routeProvider.when('/user-profile', {
		templateUrl: 'html/user-profile.html'
	});

	$routeProvider.otherwise('/home');
}])