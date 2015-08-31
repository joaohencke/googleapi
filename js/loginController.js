app.controller('loginController', ['$scope', '$location', 'GAPI', function ($scope, $location, GAPI) { 
	$scope.authenticate = function () {
		var promise = GAPI.init();
		promise.then(function(resp) {
			$location.path('dataUser/signed');
		})
	}

	
}]);