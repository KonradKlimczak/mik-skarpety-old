"use strict";
angular.module('mikApp').controller('OfferDetailsController', ['$scope', 'OfferService', '$stateParams',
  function ($scope, OfferService, $stateParams) {
    $scope.sock = OfferService.getOfferById($stateParams.offerId);
  }]);