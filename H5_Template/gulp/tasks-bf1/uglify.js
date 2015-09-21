var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  gulpif = require('gulp-if'),
  clean = require('gulp-clean'),
  rename = require('gulp-rename');

var argv = require('yargs').argv;

gulp.task('uglify', function(){
  var processDir = global.buildDir + global.lang + '/';
  return gulp.src(processDir + '*.js')
    .pipe(clean({force: true}))
    .pipe(gulpif(isRelease(), uglify()))
    .pipe(gulpif(isRelease(), rename({suffix: '.min'})))
    .pipe(gulp.dest(processDir));
});

function isRelease(){
  return !!argv.release;
}