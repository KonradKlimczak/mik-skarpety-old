"use strict";
angular.module('mikApp').controller('OfferController', ['$scope', 'OfferService', function ($scope, OfferService) {
  $scope.socks = [];
  OfferService.getOffer().success(function(data) {
        $scope.socks = data.socks;
    }).error(function(data, status, headers, config) {
        console.log('error');
    });;
  $scope.categories = [{
    "name": "Men",
    "value": true
  }, {
    "name": "Women",
    "value": true
  }, {
    "name": "Sport",
    "value": true
  }];
  $scope.goToDetails = goToDetails;

  function goToDetails(sock) {
    OfferService.goToDetails(sock);
  }
}]);