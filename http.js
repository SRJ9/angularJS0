// modulos:
// * ngResource - API
var app = angular.module("MyFirstApp", []);
app.controller("FirstController", function($scope, $http){
	$scope.posts = [];

	$scope.loading = true;

	$scope.newPost = {};
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
			$scope.loading = false;
		})
		.error(function(err){
			$scope.loading = false;
		});
	$scope.addPost = function(){
		$http.post("http://jsonplaceholder.typicode.com/posts", {
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId: 1
		})
		.success(function(data, status, headers, config){
			$scope.posts.push(data);
			$scope.newPost = {};
		})
		.error(function(error, status, headers, config){
			console.log(error);
		});
	}
});