'use strict';

var app = angular.module('pt.filters', []);

app.filter('ageFilter', function(){
	function calculateAge(birthday){
		var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	return function(birthdate) { 
        return calculateAge(new Date(birthdate));
    }; 
})