angular.module('mikApp').config([
  '$stateProvider', 
  function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/main/views/home.template.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/app/main/views/about.template.html'
      })
      .state('offer', {
        url: '/offer',
        templateUrl: '/app/offer/views/offer.template.html',
        controller: 'OfferController'
      })
      .state('details', {
        url: "/details/:offerId",
        templateUrl: '/app/offer/views/offer-details.template.html',
        controller: 'OfferDetailsController'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '/app/main/views/contact.template.html'
      });
  }
]);