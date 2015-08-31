app.factory('api', ['$http', function ($http) {
	return {
		user : {
			getToken : function () {
				return $http.get("https://accounts.google.com/o/oauth2/auth?scope=email%20profile&state=%2Fprofile&redirect_uri=https%3A%2F%2Foauth2-login-demo.appspot.com%2Foauthcallback&response_type=token&client_id=688122198296-091plhf1vsgmirvpsjsglchhgqdrtnhj.apps.googleusercontent.com");
			}
		}
	}

}])