"use strict";
angular.module('mikApp').controller('OfferController', [
  '$scope', 'OfferService', '$mdDialog',
  function ($scope, OfferService, $mdDialog) {
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
        $mdDialog.show($mdDialog.confirm({
          title: 'Request failed',
          textContent: 'HTTP request has failed. Please try again later.',
          ok: 'Try Again',
          cancel: 'Cancel'
        })).then(function () {
          loadOffer();
        });
      });
    }
    function toggleCategories(category) {
      if (category.name !== 'All') {
        return;
      }
      for (var i = 0; i < $scope.categories.length; i += 1) {
        $scope.categories[i].value = category.value;
      }
    }
  }]);