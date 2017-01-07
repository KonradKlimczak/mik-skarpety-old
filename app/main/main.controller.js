angular.module('mikApp').controller('MainController', ['$rootScope', '$scope', '$mdSidenav', '$translate', '$window',
  function ($rootScope, $scope, $mdSidenav, $translate, $window) {
    var availableLanguages = ['pl', 'no', 'en-GB', 'en-US'];
    var lang = $window.navigator.language || $window.navigator.userLanguage;
    if (availableLanguages.indexOf(lang) === -1) {
        lang = 'pl';
    }
    changeLanguage(lang);

    $scope.supportedLanguages = availableLanguages;
    $scope.toggleLeftMenu = function () {
      $mdSidenav('left').toggle();
    };
    $scope.changeLanguage = changeLanguage;

    function changeLanguage(langKey) {
      $rootScope.language = langKey;
      $translate.use(langKey);
    }
  }]);