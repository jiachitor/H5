var gulp = require('gulp');

var config = require('../config')['copy-assets'];

gulp.task('copy-assets', function(){
  gulp.src(config.src, {buffer: false})
    .pipe(gulp.dest(global.buildDir+global.lang+'/assets/'));
});