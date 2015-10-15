// modulos:
// * ngResource - API
var app = angular.module("MyFirstApp", []);
app.run(function($rootScope){
	$rootScope.nombre = "Pepote";
});
app.controller("FirstController", function($scope){
	$scope.nombre = "Pepe";
	setTimeout(function(){
		$scope.$apply(function(){
			$scope.nombre = 'Jose';
		});
	}, 2000);
});
app.controller("ChildController", function($scope){
	$scope.nombre = "Pepito";

})