var gulp = require('gulp'),
  sequence = require('run-sequence'),
  i18n = require('./i18n');

//这里是 build 所有的语言
gulp.task('build', function(){
  sequence.apply(null, global.gulp.langTasks);
});