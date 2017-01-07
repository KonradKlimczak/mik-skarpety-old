"use strict";
angular.module('mikApp').controller('OfferController', [
  '$scope', 'OfferService',
  function ($scope, OfferService) {
    $scope.socks = [];
    $scope.categories = OfferService.getCategories();
    $scope.showAll = true;
    $scope.toggleCategories = toggleCategories;
    loadOffer();

    function loadOffer() {
      OfferService.getOffer().then(function (data) {
        $scope.socks = data.data.socks;
      }, function (data) {
        console.error(data);
        OfferService.showErrorDialog().then(function () {
          loadOffer();
        });
      });
    }
    function toggleCategories() {
      for (var i = 0; i < $scope.categories.length; i += 1) {
        $scope.categories[i].value = $scope.showAll;
      }
    }
  }]);