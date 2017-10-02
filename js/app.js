'use strict';

var app = angular.module('ptFinder', [
		'ngRoute',
		'LocalStorageModule',
		'pt.routes',
		'pt.navigation',
		'pt.config',
		'pt.filters',
		'pt.home',
		'pt.userRegister',
		'pt.ptRegister',
		'pt.login',
		'pt.ptProfile'
	]);

