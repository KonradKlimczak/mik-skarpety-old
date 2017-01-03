var development = {
  app: {
    js: [
      'app/app.module.js',
      'app/app.config.js',
      'app/app.routes.js',
      'app/main/main.controller.js',
      'app/offer/offer.service.js',
      'app/offer/offer.controller.js',
      'app/offer/offer-details.controller.js',
      'app/offer/offer.controller.js'

    ]
  },
  dependency: {
    js: [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-aria/angular-aria.js',
      'node_modules/angular-messages/angular-messages.js',
      'node_modules/angular-material/angular-material.js',
      'node_modules/angular-translate/dist/angular-translate.js',
      'node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files.js'
    ]
  },
  test: {
    js: [
      'node_modules/angular-mocks/angular-mocks.js',
      'tests/**/*.js'
    ]
  }
};

module.exports = {
  appJs: development.app.js,
  dependencyJs: development.dependency.js,
  js: development.dependency.js.concat(development.app.js),
  testJs: development.dependency.js.concat(development.app.js).concat(development.test.js)
};