"use strict";
angular.module('mikApp').controller('OfferDetailsController', ['$scope', 'OfferService', '$stateParams',
  function ($scope, OfferService, $stateParams) {
    OfferService.getOffer().success(function (data) {
      var socks = data.socks;

      for (var i = 0; i < socks.length; i += 1) {
        if (socks[i].id === $stateParams.offerId) {
          $scope.sock = socks[i];
          break;
        }
      }
    }).error(function (data, status, headers, config) {
        console.log('error');
      });;
  }]);