var app = angular.module('iComeHome', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'templates/login.html'
    })
    // .state('', {
    //   url: '/',
    //   templateUrl: 'templates/'
    // })
    // .state('', {
    //   url: '/',
    //   templateUrl: 'templates/'
    // })
    // .state('', {
    //   url: '/',
    //   templateUrl: 'templates/'
    // })
    // .state('', {
    //   url: '/',
    //   templateUrl: 'templates/'
    // });

}]);
