var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_replace = require('gulp-replace'),
    gp_clean = require('gulp-clean'),
    env = require('./environment');

gulp.task('templates-fef', function () {
    var regex = new RegExp("\/app\/(\w)\/views\/g"),
        filesToReplace = env.appJs.concat(env.template);
    for (var i = 0; i < filesToReplace.length; i += 1) {
        gulp.src(filesToReplace[i])
            .pipe(gp_replace(regex, '/dist/$1/'))
            .pipe(gulp.dest('dist/' + filesToReplace[i]));
    }
});

gulp.task('js-fef', function () {
    var prodJs = env.prodJs;
    for (var i = 0; i < prodJs.length; i += 1) {
        prodJs[i] = 'dist/' + prodJs[i];
    }

    gulp.src(prodJs)
        .pipe(gp_concat('concated'))
        .pipe(gp_rename('lib.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('css-fef', function () {
    return gulp.src(env.css)
        .pipe(gp_concat('lib.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-app', ['templates-fef', 'js-fef', 'css-fef'], function () { });

gulp.task('default', function () { });