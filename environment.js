var environment = {
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
    ],
    css: [
      'css/main.css',
      'css/table.css',
      'css/animations.css',
      'css/color-box.css'
    ],
    templates: [
      '/app/main/views/about.template.html',
      '/app/main/views/contact.template.html',
      '/app/main/views/footer.template.html',
      '/app/main/views/home.template.html',
      '/app/main/views/menu.template.html',
      '/app/main/views/sidenav.template.html',
      '/app/offer/views/offer.template.html',
      '/app/offer/views/offer-details.template.html'
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
    ],
    css: [
      'node_modules/angular-material/angular-material.min.css'
    ]
  },
  production: {
    js: [
      'app/app.production.config.js'
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
  appJs: environment.app.js,
  dependencyJs: environment.dependency.js,
  js: environment.dependency.js.concat(environment.app.js),
  prodJs: environment.dependency.js.concat(environment.app.js).concat(environment.production.js),
  testJs: environment.dependency.js.concat(environment.app.js).concat(environment.test.js),
  appCss: environment.app.css,
  css: environment.dependency.css.concat(environment.app.css),
  template: environment.app.templates
};