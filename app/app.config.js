angular.module('mikApp').config([
    '$mdThemingProvider', '$locationProvider', '$urlRouterProvider', '$translateProvider', 
    function ($mdThemingProvider, $locationProvider, $urlRouterProvider, $translateProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('red', {
                'default': '500', // by default use shade 400 from the pink palette for primary intentions
                'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '800', // use shade 600 for the <code>md-hue-2</code> class
                'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
            })
            // If you specify less than all of the keys, it will inherit from the
            // default shades
            .accentPalette('cyan', {
                'default': '500' // use shade 200 for default, and keep all other shades the same
            });

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');

        // var availableLanguages = ['pl', 'no'];
        // var lang = $window.navigator.language || $window.navigator.userLanguage;

        $translateProvider
            .useStaticFilesLoader({
                prefix: '/app/translations/',
                suffix: '.json'
            })
            .preferredLanguage('pl');

    }]);