var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    minifycss = require('gulp-minify-css'),  //CSS压缩
    rename = require('gulp-rename'),        // 重命名
    fs = require('fs');

var _ = require('lodash'),
    argv = require('yargs').argv,
    config_less = require('../config').less,
    set_env = require('../config').set_env;

function isRelease() {
    return !!argv.release;
}

gulp.task('less_to_together', function () {
    var entries = [],
        stream;
    _.forEach(config_less.pages, function (entry) {
        var curEntryName = 'main.less',
            curEntry = config_less.src + entry + '/less/' + curEntryName;
        if (!fs.existsSync(curEntry)) {//如果当前语言没有入口文件，则使用默认的入口文件
            //curEntry = config_less.src + curEntryName;
        }
        entries.push(curEntry);
    });

    stream = gulp.src(entries);

    if (isRelease()) {
        stream.pipe(less())
            .pipe(rename('style.css'))
            .pipe(minifycss())
            .pipe(gulp.dest(set_env.environment[0] + '/css/'))
            .pipe(notify({message: 'the less_to_together to build complete'}));
    } else {
        stream.pipe(sourcemaps.init())
            .pipe(less())
            .pipe(rename('style.css'))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest(set_env.environment[1] + '/css/'))
            .pipe(notify({message: 'the less_to_together to develop complete'}));
    }

    return stream;
});

gulp.task('less_to_oneself', function () {

    _.forEach(config_less.pages, function (page) {
        var curEntryName = 'main.less',
            curEntry = config_less.src + page + '/less/' + curEntryName;
        if (!fs.existsSync(curEntry)) {//如果当前语言没有入口文件，则使用默认的入口文件
            //curEntry = config_less.src + curEntryName;
        }

        gulp.src(curEntry)
            .pipe(less())
            .pipe(rename('style.css'))
            .pipe(minifycss())
            .pipe(gulp.dest(config_less.src + page + '/css/'))
            .pipe(notify({message: 'the less_to_oneself to build complete'}));

    });

});

