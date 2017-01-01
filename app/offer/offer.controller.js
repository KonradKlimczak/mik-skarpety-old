"use strict";
angular.module('mikApp').controller('OfferController', [
  '$scope', 'OfferService',
  function ($scope, OfferService) {
    $scope.socks = [];
    $scope.categories = OfferService.getCategories();
    loadOffer();

    function loadOffer() {
      OfferService.getOffer().then(function (data) {
        $scope.socks = data.data.socks;
      }, function (data) {
        console.error(data);
        OfferService.showErrorDialog().then(function() {
          loadOffer();
        });
      });
    }
  }]);