'use strict';

var app = angular.module('pt.config', []);

app.config(function(localStorageServiceProvider) {
	localStorageServiceProvider
		.setPrefix('ptFinder')
		.setNotify(true, true);
});