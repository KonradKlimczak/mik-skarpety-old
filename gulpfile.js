var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');

var js_files = [
    'node_modules/angular/angular.min.js',
    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/angular-aria/angular-aria.min.js',
    'node_modules/angular-messages/angular-messages.min.js',
    'node_modules/angular-material/angular-material.min.js',
    'node_modules/angular-translate/dist/angular-translate.min.js',
    'node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
    'app/app.module.js',
    'app/app.config.js',
    'app/app.routes.js',
    'app/main/main.controller.js',
    'app/offer/offer.controller.js',
    'app/offer/offer.service.js'
];

var css_files = [
    'node_modules/angular-material/angular-material.min.css'
];

var app_files = [
    'app/app.module.js',
    'app/app.config.js',
    'app/app.routes.js',
    'app/main/main.controller.js',
    'app/offer/offer.controller.js',
    'app/offer/offer.service.js'
];

gulp.task('js-fef', function () {
    return gulp.src(js_files)
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('lib.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('css-fef', function () {
    return gulp.src(css_files)
        .pipe(gp_concat('lib.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-app', function () {
    return gulp.src(app_files)
        .pipe(gp_concat('app.concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('app.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js-fef', 'css-fef'], function () { });