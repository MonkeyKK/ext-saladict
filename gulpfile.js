'use strict'


var gulp = require('gulp')
var runSequence = require('run-sequence')
var $ = require('gulp-load-plugins')()

require('require-dir')('./tasks')


gulp.task('watch', function() {
  gulp.watch(['src/component/**/*.js', 'test/**/*.js'], ['js-lint'])
  gulp.watch(['src/component/**/*.scss'], ['sass-debug'])
  gulp.watch(['src/manifest.json'], ['manifest-debug'])
  gulp.watch(['src/**/*'], ['livereload'])
  gulp.watch([
    'src/lib/**/*',
    'src/css/**/*',
    'src/images/**/*',
    'src/_locales/**/*'
  ], ['copy'])
});


gulp.task('default', function() {
  runSequence(
    'clean',
    'copy',
    ['manifest-debug',
      'sass-debug',
      'js-debug',
      'createWebSocketServer'],
    'watch'
  )
})