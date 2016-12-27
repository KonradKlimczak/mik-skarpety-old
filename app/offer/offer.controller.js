"use strict";
angular.module('mikApp').controller('OfferController', [
  '$scope', 'OfferService',
  function ($scope, OfferService) {
    $scope.socks = [];
    OfferService.getOffer().then(function (data) {
      $scope.socks = data.data.socks;
    }, function (data, status, headers, config) {
      console.log('error');
    });
    $scope.categories = [{
      "name": "Men",
      "value": true
    }, {
      "name": "Women",
      "value": true
    }, {
      "name": "Sport",
      "value": true
    }, {
      "name": "Frotte",
      "value": true
    }, {
      "name": "Stopki",
      "value": true
    }, {
      "name": "Bambusowe",
      "value": true
    }, {
      "name": "Category_7",
      "value": true
    }];
    $scope.goToDetails = goToDetails;

    function goToDetails(sock) {
      OfferService.goToDetails(sock);
    }
  }]);