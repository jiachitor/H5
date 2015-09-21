var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    gulpif = require('gulp-if'),
    streamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    collapser = require('bundle-collapser'),
    es6transpiler = require('gulp-es6-module-transpiler');

var browserSync = require('browser-sync');
var _ = require('lodash');
var config_browserify = require('../config').browserify;
var config_tpl_browserify = require('../config_tpl').browserify;


/*=============================== app 控制台============================================*/

var browserifyTask = function (options) {
    var bundler = browserify({
        entries: [options.base + options.entries],
        transform: [reactify],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });
    var watcher  = watchify(bundler);
    var updateStart = Date.now();

    function bundle(){
        return watcher
            .bundle()
            .on('error',gutil.log.bind(gutil,'Browserify Error'))
            .pipe(source(options.outputFilename))
            .pipe(gulpif(!options.development, streamify(uglify())))
            .pipe(gulp.dest(options.dest))
            .pipe(notify(function () {
                console.log(options.outputFilename + ' bundle built in ' + (Date.now() - updateStart) + 'ms');
            }));
    }

    bundle();
    watcher.on('update', bundle)
};

//单个js文件进行编译
gulp.task('browserify_to_oneself', function () {
    return _.forEach(config_browserify.watch_pages, function (page) {
        browserifyTask({
            development: true,
            base: config_browserify.src + page + '/js/',
            entries: config_browserify.dest.entries,
            dest: config_browserify.src ,
            outputFilename: config_browserify.dest.outputFile,
            bundleName: 'react ' + page,
            externals: config_browserify.dest.dependencies
        });
    });
});

//重新刷新页面
gulp.task('js_watch_to_oneself', browserSync.reload);

//所有的js browserify 之后打包到一个


/*=================================== tpl ============================================*/

//单个js文件进行编译
gulp.task('browserify_tpl', function () {
    return _.forEach(config_tpl_browserify.watch_pages, function (page) {
        browserifyTask({
            development: true,
            base: config_tpl_browserify.src + page + '/js/',
            entries: config_tpl_browserify.dest.entries,
            dest: config_tpl_browserify.src + page,
            outputFilename: config_tpl_browserify.dest.outputFile,
            bundleName: 'react ' + page,
            externals: config_tpl_browserify.dest.dependencies
        });
    });
});

//重新刷新页面
gulp.task('js_watch_tpl', browserSync.reload);