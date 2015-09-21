var browserify = require('browserify'),
  gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  factor = require('factor-bundle'),
  uglify = require('gulp-uglify'),
  gulpif = require('gulp-if'),
  replacement = require('../utils/replacement');

var fs = require('fs'),
  path = require('path'),
  argv = require('yargs').argv,
  Q = require('q'),
  _ = require('lodash'),
  requireSrc = '../../src/',
  defaultConfig = require(requireSrc + 'config/default.json'),
  config = require('../config').browserify;

gulp.task('browserify', function(){
  var entries = [],
    bundles = [],
    transDir = requireSrc + 'nls/' + global.lang + '.json',
    trans,
    configDir = requireSrc + 'config/' + global.lang + '.json',
    curLangConfig = require(configDir);
  if(!fs.existsSync(path.resolve(__dirname, transDir))){
    transDir = requireSrc + 'nls/' + global.lang.split('_')[0] + '.json';
  }
  trans = require(transDir);
  curLangConfig = _.extend(defaultConfig, curLangConfig);

  _.forEach(config.htmls, function(entry){
    var curEntryName = entry + '.js',
      curEntry = config.src + global.lang + '/' + curEntryName;
    if(!fs.existsSync(curEntry)){//如果当前语言没有入口文件，则使用默认的入口文件
      curEntry = config.src + curEntryName;
    }
    entries.push(curEntry);
    bundles.push(global.buildDir + global.lang + '/' + entry + '-bundle.js');
  });

  return browserify(entries)
    .transform(replacement, {
      'i18n': trans,
      'appConfig': curLangConfig
    })
    .plugin('factor-bundle', {
      o: bundles
    })
    .bundle()
    .pipe(source('common-bundle.js'))//pass desired output filename to vinyl-source-stream
    .pipe(gulp.dest(global.buildDir+global.lang+'/'))//start piping stream to tasks
});

function isRelease(){
  return !!argv.release;
}