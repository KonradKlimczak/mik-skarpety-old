angular.module('mikApp').service('OfferService', ['$http', '$state', '$location', function ($http, $state, $location) {
  this.getOffer = getOffer;
  this.goToDetails = goToDetails;
  this.getOfferById = getOfferById;

  function getOffer() {
    // This function is going to use $http
    return $http.get('/app/offer/socks.json');
  }

  function goToDetails(sock) {
    // $state.go('details', {param1: sock.id});
    $location.path('/details/' + sock.id).replace();
  }

  function getOfferById(sockId) {
    // This function is going to use $http
    var socks = getOffer();
    var sock;

    for (var i = 0; i < socks.length; i += 1) {
      if (socks[i].id === sockId) {
        var sock = socks[i];
        break
      }
    }

    return sock;
  }
}]);