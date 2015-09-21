var gulp = require('gulp');
var config_watch = require('../config').watch;
var config_tpl_watch = require('../config_tpl').watch;

/*=============================== app ============================================*/
function watchProcess(){
    gulp.watch([
        config_watch.src + 'app/*.scss',
        config_watch.src + 'app/scss/*.scss'
    ], ['sass_to_oneself']);
    gulp.watch([config_watch.src + 'app/*.js'], ['js_watch_to_oneself']);
}

//服务器 10.2.10.106
gulp.task('watch_int',['browserSync_int','browserify_to_oneself'], function () {
    watchProcess();
});

//服务器 172.16.77.64
gulp.task('watch_wh',['browserSync_wh','browserify_to_oneself'], function () {
    watchProcess();
});


/*=================================== tpl ============================================*/
function watchTplProcess(){
    var _watch_pages = config_tpl_watch.watch_pages;
    gulp.watch([
        config_tpl_watch.src + _watch_pages[0] + '/*.scss',
        config_tpl_watch.src + _watch_pages[0] + '/scss/*.scss'
    ], ['sass_tpl']);
    gulp.watch([config_tpl_watch.src + _watch_pages[0] + '/*.js'], ['js_watch_tpl']);
}

gulp.task('watch_tpl',['browserSync_tpl','browserify_tpl'], function () {
    watchTplProcess();
});
