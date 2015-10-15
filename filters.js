// modulos:
// * ngResource - API
var app = angular.module("mainModule", []);
app.filter('removeHtml', function(){
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm, '');
	}
})
.controller('FiltersController', function($scope){
	$scope.mi_html = {};
	$scope.mi_html.title = "Hola";
	$scope.mi_html.body = "Hola mundo";
	$scope.costo = 2;
})