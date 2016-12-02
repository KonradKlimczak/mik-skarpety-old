angular.module('mikApp').controller('MainController', ['$scope', '$mdSidenav', '$translate',
  function ($scope, $mdSidenav, $translate) {
    $scope.toggleLeftMenu = function () {
      $mdSidenav('left').toggle();
    };
    $translate.use('pl');
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
  }]);