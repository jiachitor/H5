var gulp = require('gulp'),
  argv = require('yargs').argv;

gulp.task('set-env', function(){
  global.buildDir = argv.release ? './build/' : './develop/';
});