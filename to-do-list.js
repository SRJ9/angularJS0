// modulos:
// * ngResource - API
var app = angular.module("ToDoList", ['LocalStorageModule']);
app.controller("ToDoController", function($scope, localStorageService){
	if(localStorageService.get("angular-todolist")){
		$scope.todo = localStorageService.get("angular-todolist");
	} else {
		$scope.todo = [];
	}
	
	$scope.newActv = {};
	/*
	{
		actividad: 'Terminar curso',
		fecha: '3-03-15 2:00pm'
	}
	*/
	
	$scope.$watchCollection('todo', function(newValue, oldValue){
		localStorageService.set("angular-todolist", $scope.todo);
	});
	
	$scope.addActv = function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv = {};
		
	}
});