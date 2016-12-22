"use strict";
angular.module('mikApp').controller('OfferController', ['$scope', 'OfferService', function ($scope, OfferService) {
  $scope.socks = OfferService.getOffer();
  $scope.goToDetails = goToDetails;

  function goToDetails(sock) {
    OfferService.goToDetails(sock);
  }
}]);