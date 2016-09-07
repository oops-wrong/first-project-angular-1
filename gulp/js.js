'use strict';
var gulp  = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var debug = require('gulp-debug');

var config = require('../build.config.json');
var buildDir = config.build_dir;
var appDir = config.app_dir;
var appFiles = [
  appDir + '**/*.module.js',
  appDir + '**/*.js',
  '!**/*.spec.js'
];
var vendorFiles = config.vendor_files.js;

gulp.task('js', function () {
  return gulp.src(appFiles, {base: appDir})
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(buildDir))
});

gulp.task('js:vendor', function () {
  return gulp.src(vendorFiles)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(buildDir))
});

gulp.task('build:js', function () {
  return gulp.src(appFiles, {base: appDir})
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(buildDir))
});

gulp.task('build:js:vendor', function () {
  return gulp.src(vendorFiles)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(buildDir))
});
