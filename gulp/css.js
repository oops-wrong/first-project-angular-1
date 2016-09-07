'use strict';
var gulp  = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');

var config = require('../build.config.json');
var buildDir = config.build_dir;
var appDir = config.app_dir;
var appFiles = [
  appDir + '**/*.css'
];
var vendorFiles = config.vendor_files.css;

gulp.task('css', function () {
  return gulp.src(appFiles, {base: appDir})
    .pipe(sourcemaps.init())
    .pipe(concat('app.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(buildDir))
});

gulp.task('css:vendor', function () {
  return gulp.src(vendorFiles)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(buildDir))
});

gulp.task('build:css', function () {
  return gulp.src(appFiles, {base: appDir})
    .pipe(sourcemaps.init())
    .pipe(concat('app.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(buildDir))
});

gulp.task('build:css:vendor', function () {
  return gulp.src(vendorFiles)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('vendor.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(buildDir))
});
