angular.module('mikApp').controller('MainController', ['$scope', function($scope) {
  $scope.currentDate = new Date();
  $scope.someObj = {
    test: 3
  };
}]).filter('custom', function() {
  return function(stringObg) {
    return stringObg + 'lol';
  }
});