var gulp = require('gulp'),
    sequence = require('run-sequence');

var _ = require('lodash'),
    config = require('../config').i18n;

//define i18n related tasks
global.gulp.langTasks = []; //langTasks variable for build task
_.forEach(config.langs, function (lang) {
    (function (lang) {
        gulp.task('init-' + lang, function () {
            global.gulp.lang = lang;
        });
        gulp.task('build:' + lang, function (cb) {
            //sequence('init-' + lang, 'clean', ['browserify', 'sass'], ['copy-html', 'copy-assets'], 'uglify', 'embed', cb)
            sequence('init-' + lang, 'clean', ['less'], ['copy-html', 'copy-assets'], 'uglify', 'embed', cb)
        });
    })(lang);
    global.gulp.langTasks.push('build:' + lang);
});