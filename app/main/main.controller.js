angular.module('mikApp').controller('MainController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
  $scope.toggleLeftMenu = function () {
    $mdSidenav('left').toggle();
  };
}]);