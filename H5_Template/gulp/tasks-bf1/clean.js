var gulp = require('gulp'),
  del = require('del'),
  fs = require('fs');


gulp.task('clean', ['set-env'], function(cb){
  var langDir = global.buildDir + global.lang + '/';
  if(!fs.existsSync(langDir)){
    fs.mkdirSync(langDir);
    cb();
  }else{
    del(langDir + '*', cb);
  }
});