var app = angular.module('googleapi', ['ngRoute', 'gapi']);

app.value('GoogleApp', {
    apiKey: 'friendly-retina-105215',//'oYfs94BNw6ef8PpE6I3ys_kR',
    clientId: '1035405667600-97makf2a4nnprf2gpevbsumrnelpas4q.apps.googleusercontent.com',//'688122198296-091plhf1vsgmirvpsjsglchhgqdrtnhj.apps.googleusercontent.com',
    scopes: [
      'https://www.googleapis.com/auth/userinfo.profile'
    ]
  });
