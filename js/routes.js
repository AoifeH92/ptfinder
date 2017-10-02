'use strict';

var app = angular.module('pt.routes', []);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$locationProvider.hashPrefix('');

	$routeProvider.when('/home', {
		templateUrl: 'html/home.html',
		controller: 'homeController'
	});

	$routeProvider.when('/pt-login', {
		templateUrl:'html/login.html',
		controller:'loginController',
		stateParams:{type:'pt'}
	});

	$routeProvider.when('/user-login', {
		templateUrl:'html/login.html',
		controller:'loginController',
		stateParams:{type:'user'}
	});

	$routeProvider.when('/pt-signup', {
		templateUrl: 'html/pt-signup.html',
		controller: 'ptRegisterController'
	});

	$routeProvider.when('/pt-profile', {
		templateUrl: 'html/pt-profile.html',
		controller: 'ptProfileController',
		stateParams:{id:null}
	});

	$routeProvider.when('/user-signup', {
		templateUrl: 'html/user-signup.html',
		controller: 'userRegisterController'
	});

	$routeProvider.when('/user-profile', {
		templateUrl: 'html/user-profile.html',
		stateParams:{id:null}
	});

	$routeProvider.otherwise('/home');
}])