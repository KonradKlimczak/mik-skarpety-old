"use strict";
angular.module('mikApp').controller('OfferDetailsController', ['$scope', 'OfferService', '$stateParams', '$state',
  function ($scope, OfferService, $stateParams, $state) {
    $scope.beforeSelectedSock;
    $scope.afterSelectedSock;
    $scope.goToSock = goToSock;

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
    }, function () {
      console.log('error');
    });

    function goToSock(sock) {
      if (!sock) {
        return;
      }
      $state.go('details', {offerId: sock.id});
    }
  }]);