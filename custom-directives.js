// modulos:
// * ngResource - API
var app = angular.module("CustomDirective", []);
app.directive('backImg', function(){
	return function(scope, element, attrs){
		attrs.$observe('backImg', function(value){
			element.css({
				'background': 'url('+value+')',
				'background-size': 'cover',
				'background-position': 'center'
			});
		});

	}
});
app.controller("AppCtrl", function($scope, $http){
	$http.get('https://api.github.com/users/SRJ9/repos')
		.success(function(data){
			$scope.repos = data;
		})
		.error(function(err){
			console.log(err);
		})
});
