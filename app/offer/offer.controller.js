"use strict";
angular.module('mikApp').controller('OfferController', ['$scope', 'OfferService', function($scope, OfferService) {
    $scope.socks = OfferService.getOffer();
}]);