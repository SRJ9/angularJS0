// modulos:
// * ngResource - API
var app = angular.module("CustomDirective", []);
app.controller("AppCtrl", function($scope, $http){
	$http.get('https://api.github.com/users/SRJ9/repos')
		.success(function(data){
			$scope.repos = data;
		})
		.error(function(err){
			console.log(err);
		})
});