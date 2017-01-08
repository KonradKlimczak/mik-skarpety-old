angular.module('mikApp').controller('MainController', ['$rootScope', '$scope', '$mdSidenav', '$translate', '$window',
  function ($rootScope, $scope, $mdSidenav, $translate, $window) {
    var lang = getUserLanguage();
    changeLanguage(lang);

    $scope.supportedLanguages = ['pl', 'no', 'en'];
    $scope.toggleLeftMenu = function () {
      $mdSidenav('left').toggle();
    };
    $scope.changeLanguage = changeLanguage;

    function changeLanguage(langKey) {
      $rootScope.language = langKey;
      $translate.use(langKey);
    }

    function getUserLanguage() {
      var availableLanguages = ['pl', 'no', { 'en-GB': 'en' }, { 'en-US': 'en' }];
      var browserLang = $window.navigator.language || $window.navigator.userLanguage;
      var userLang = 'pl';  // Default app language is pl
      for (var i = 0; i < availableLanguages.length; i += 1) {
        if (availableLanguages[i] === browserLang) {
          userLang = browserLang;
          break;
        }
        if (typeof availableLanguages[i][browserLang] !== 'undefined') {
          userLang = availableLanguages[i][browserLang];
          break
        }
      }
      return userLang;
    }
  }]);
