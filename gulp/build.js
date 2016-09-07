'use strict';
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
  runSequence(
    'clean',
    ['common', 'build:js', 'build:js:vendor', 'build:css', 'build:css:vendor'],
    'delete-empty-directories',
    callback
  );
});
