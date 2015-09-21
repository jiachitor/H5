var gulp = require('gulp');
var browserSync = require('browser-sync');

var sass = require('../config').sass;

gulp.task('watch', function () {
    gulp.watch(sass.src, ['sass_to_oneself']);
    _.forEach(sass.pages, function (entry) {
        gulp.watch('./'+ entry +'/*.css').on('change', function () {
            gulp.src('./'+ entry +'/*.css').pipe(browserSync.reload({stream: true}));
        });
    });
});