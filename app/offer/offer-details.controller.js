"use strict";
angular.module('mikApp').controller('OfferDetailsController', ['$scope', 'OfferService', '$stateParams',
  function ($scope, OfferService, $stateParams) {
    $scope.beforeSelectedSock = null;
    $scope.afterSelectedSock = null;    

    OfferService.getOffer().then(function (data) {
      var socks = data.data.socks;

      for (var i = 0; i < socks.length; i += 1) {
        if (socks[i].id === $stateParams.offerId) {
          $scope.sock = socks[i];
          if(i !== 0) {
            $scope.beforeSelectedSock = socks[i-1];
          }
          if(i !== socks.length-1) {
            $scope.afterSelectedSock = socks[i+1];
          }
          break;
        }
      }
    }, function (data, status, headers, config) {
      console.log('error');
    });
  }]);