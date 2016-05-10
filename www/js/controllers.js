angular.module('starter.controllers',[])

.controller('CocheCtrl', ['$scope', '$http', function($scope,$http){
	$http.get('js/data.json').success(function(data){
		$scope.detalles = data.detalles;
		$scope.data = {
			showReorder: false
		};
	});

	$scope.toogleDescripcion = function(item){
		item.resumido = !item.resumido;
	}

	$scope.moveItem = function(item, formIndex, toIndex){
		$scope.detalles.splice(fromIndex, 1);
		$scope.detalles.splice(toIndex, 0, item);
	}
}])

.controller('ComunidadCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('js/data.json').success(function(data){
		$scope.usuarios = data.usuarios;
	});
}])

.controller('UserCtrl', ['$scope', '$http', '$state', function($scope, $http, $state){
	$http.get('js/data.json').success(function(data){
		$scope.data = data.usuarios[$state.params.id];
	});
}])