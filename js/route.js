app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/login.html',
			controller: 'loginController'
		})
		.when('/dataUser/:signed', {
			templateUrl: '/partials/dataUser.html',
			controller: 'dataUserController'
		})
		.otherwise({
			redirectTo: "/"
		})
		
})