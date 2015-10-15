// modulos:
// * ngResource - API
var app = angular.module("MyFirstApp", []);
app.controller("FirstController", function($scope){
	$scope.nombre = "Pepito";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{ 
			comentario: "Comentario 1",
			username: "user uno"
		},
		{
			comentario: "Comentario 2",
			username: "user two"
		}
	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}
});