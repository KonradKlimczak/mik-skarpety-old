var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_replace = require('gulp-replace'),
    gp_clean = require('gulp-clean'),
    env = require('./environment');

gulp.task('copy-translations', function () {
  return gulp.src("app/translations/**/*.json")
    .pipe(gulp.dest('dist/translations/'))
});

gulp.task('copy-templates', function () {
  var rename = require("gulp-rename");
  gulp.src("app/**/*.html")
    .pipe(rename(function(path){
      path.dirname = path.dirname.replace("\\views", "");
    }))
    .pipe(gulp.dest('dist/templates/'))
});

gulp.task('copy-js', function () {
  var rename = require("gulp-rename");
  gulp.src(env.prodJs)
    .pipe(gp_concat('concated'))
    .pipe(gp_replace("/app/translations/", "/dist/translations/"))
    .pipe(gp_replace("/app/data/", "/data/"))
    .pipe(gp_replace("/views/", "/"))
    .pipe(gp_replace("/app/", "/templates/"))
    .pipe(gp_rename('lib.min.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-css', function () {
    return gulp.src(env.css)
        .pipe(gp_concat('lib.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-date', function () {
  return gulp.src("app/**/*.dat")
    .pipe(gulp.dest('dist/'))
});


gulp.task('copy-images', function () {
  return gulp.src("images/**/*.jpg")
    .pipe(gulp.dest('dist/images/'))
});


gulp.task('build-app', ['copy-templates', 'copy-js', 'copy-css', 'copy-translations', 'copy-date', 'copy-images'], function () { });

gulp.task('default', function () { });