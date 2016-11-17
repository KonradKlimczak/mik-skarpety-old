angular.module('mikApp').config([
  '$stateProvider', '$locationProvider', '$urlRouterProvider',
  function($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/main/views/home.template.html',
        controller: 'MainController'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '/app/main/views/contact.template.html'
      });
    $urlRouterProvider.otherwise('/');
  }
]);