var gulp        = require('gulp');
var sass        = require('gulp-sass');
var autoprefixer= require('gulp-autoprefixer');
var rename      = require('gulp-rename');

var config      = require('../config');

gulp.task('build', function() {

  return gulp.src(config.sass.src)
    .pipe(sass())
    .on('error', function (err) {
      console.log(err);
    })
    .pipe(autoprefixer(
      config.sass.autoprefixer
    ))
    .pipe(rename('rig-build.css'))
    .pipe(gulp.dest(config.sass.dest));

});
