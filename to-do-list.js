// modulos:
// * ngResource - API
var app = angular.module("ToDoList", ['LocalStorageModule']);
app.controller("ToDoController", function($scope, localStorageService){
	$scope.todo = [];
	$scope.newActv = {};
	/*
	{
		actividad: 'Terminar curso',
		fecha: '3-03-15 2:00pm'
	}
	*/
	$scope.addActv = function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv = {};
	}
});