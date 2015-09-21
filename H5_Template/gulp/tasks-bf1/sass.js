var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  minifycss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  fs = require('fs'),
  modify = require('../utils/dp-gulp-modify');

var _ = require('lodash'), 
  argv = require('yargs').argv,
  requireSrc = '../../src/',
  defaultConfig = require(requireSrc + 'config/default.json'),
  config = require('../config').sass;

gulp.task('sass', function(){
  var entries = [],
    bundles = [],
    stream;
  _.forEach(config.htmls, function(entry){
    var curEntryName = entry + '.scss',
      curEntry = config.src + global.lang + '/' + curEntryName;
    if(!fs.existsSync(curEntry)){//如果当前语言没有入口文件，则使用默认的入口文件
      curEntry = config.src + curEntryName;
    }
    entries.push(curEntry);
    bundles.push(global.buildDir + global.lang + '/');
  });

  stream = gulp.src(entries);
  if(isRelease()){
    stream.pipe(sass())
      .pipe(modify(configModifer))
      .pipe(minifycss())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(global.buildDir + global.lang + '/'));
  }else{
    stream.pipe(sourcemaps.init())
      .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(modify(configModifer))
    .pipe(gulp.dest(global.buildDir + global.lang + '/'));
  }

  return stream;
});

function isRelease(){
  return !!argv.release;
}

function configModifer(data){
  var reg = /_c\s*\(\s*['"]([^'"\)]*)['"]\s*\)/g,
    chReg = /_ch\s*\(\s*['"]([^'"\)]*)['"]\s*\)/g,
    configDir = requireSrc + 'config/' + global.lang + '.json',
    curLangConfig = require(configDir);

  curLangConfig = _.extend(defaultConfig, curLangConfig);
  return data.replace(reg, function(m, k){
      if(!curLangConfig || !curLangConfig[k]){
        return JSON.stringify(k);
      }else{
        return JSON.stringify(curLangConfig[k]);
      }
    })
    .replace(chReg, function(m, k){//replace html
      if(!curLangConfig || !curLangConfig[k]){
        return k;
      }else{
        return curLangConfig[k];
      }
    });
}