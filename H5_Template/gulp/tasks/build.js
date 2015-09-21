var gulp = require('gulp'),
  sequence = require('run-sequence'),
  i18n = require('./i18n');

//这里是 build 所有的语言,也就是有多少个语言就会打多少个包，遍历打包。
//global.gulp.langTasks 的数据格式为['build:zh','build:en']
//在一般的项目下我们没有根据语言打包的需求，所以只需要更改配置文件即可，只设置一个语言
gulp.task('build', function(){
  sequence.apply(null, global.gulp.langTasks);
});