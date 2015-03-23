var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var cache       = require('gulp-cached');
var sass        = require('gulp-sass');
var scsslint    = require('gulp-scss-lint');
var autoprefixer= require('gulp-autoprefixer');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var config      = require('../config');

gulp.task('sass', ['scss-lint'], function() {

  return gulp.src(config.sass.src)
    .pipe(plumber())
    // .pipe(cache('sass'))
    .pipe(sass(config.sass.compile))
    .pipe(autoprefixer(
      config.sass.autoprefixer
    ))
    .pipe(gulp.dest(config.paths.dev + config.sass.dest))
    .pipe(reload({stream: true}));

});

gulp.task('scss-lint', function() {
  return gulp.src(config.sass.src)
    .pipe(plumber())
    // .pipe(cache('scss-lint'))
    .pipe(scsslint(
      config.sass.lint
    ));
});
