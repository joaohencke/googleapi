app.controller('loginController', ['$scope', '$location', 'GAPI','Plus', function ($scope, $location, GAPI, Plus) { 
	$scope.authenticate = function () {
		var promise = GAPI.init();
		promise.then(function(resp) {
			$location.path('dataUser/signed');
		})
	}

	
}]);