/*
	angular.module('demoApp', []);

	function simpleController($scope){
		$scope.customers=[
			{name:'a', city:'A'},{name:'b', city:'B'},
			{name:'c', city:'C'},{name:'d', city:'D'}, 
			{name:'a', city:'H'}
			];
	};
*/
angular.module('run', []).controller('names',function($scope){
	$scope.names=[
		{name:'R', country:'Sweden'}
	];
})


/*
	angular.module("mainModule", [])

	.filter("removeHtml", function(){
		return function(texto){
			return String(texto).replace(/<[]+>/gm, '');
		}
	})

	.controller("FilterController", function($scope){
		$scope.mi_html= {};
		$scope.mi_html.title=" hola";
		$scope.mi_html.body=" mundo";
		$scope.costo = 2;
	});
*/