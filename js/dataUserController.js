app.controller('dataUserController', ['$rootScope', '$scope', '$routeParams', 'Plus', 'analysisService', function ($rootScope, $scope, $routeParams, Plus, analysisService) {
	
	var getUser = function () {
		Plus.getPeople('me').then(function(resp) {
			$scope.user = angular.fromJson(resp);
		},
		function(reason) {
			console.log(reason)
		});
	}
	
	if ($routeParams.signed) 
		getUser();


	$scope.processForm = function (problem) {
		var charArrayText = analysisService.removeChars(problem.text);
		$scope.list = analysisService.combine(charArrayText, problem.number);

	}

}])