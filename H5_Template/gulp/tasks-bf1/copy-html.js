var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  minifyHtml = require('gulp-minify-html'),
  modify = require('../utils/dp-gulp-modify');

var fs = require('fs'),
  path = require('path'),
  argv = require('yargs').argv,
  _ = require('lodash'),
  requireSrc = '../../src/',
  defaultConfig = require(requireSrc + 'config/default.json'),
  config = require('../config')['copy-html'];


gulp.task('copy-html', function(){
  var entries = [],
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
    var curEntryName = entry + '.html',
      curEntry = config.src + global.lang + '/' + curEntryName,
      fullPath, curHtmlContent;
    if(!fs.existsSync(curEntry)){//如果当前语言没有入口文件，则使用默认的入口文件
      curEntry = config.src + curEntryName;
    }
    entries.push(curEntry);
  });

  return gulp.src(entries, {buffer: false})
    .pipe(modify(i18n))
    .pipe(modify(configModifer))
    .pipe(modify(insertScript))//给html插入相应的script标签
    .pipe(gulpif(isRelease(), minifyHtml({quotes: true})))
    .pipe(gulp.dest(global.buildDir+global.lang+'/'))//start piping stream to tasks
});


function isRelease(){
  return !!argv.release;
}


function i18n(data, file){
  var reg = /_t\s*\(\s*['"]([^'"\)]*)['"]\s*\)/g,
    thReg = /_th\s*\(\s*['"]([^'"\)]*)['"]\s*\)/g,
    transDir = requireSrc + 'nls/' + global.lang + '.json',
    trans;
  if(!fs.existsSync(path.resolve(__dirname, transDir))){
    transDir = requireSrc + 'nls/' + global.lang.split('_')[0] + '.json';
  }
  trans = require(transDir);

  return data.replace(reg, function(m, k){
    if(!trans || !trans[k]){
      return JSON.stringify(k);
    }else{
      return JSON.stringify(trans[k]);
    }
  })
  .replace(thReg, function(m, k){
    if(!trans || !trans[k]){
      return k;
    }else{
      return trans[k];
    }
  });
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

function insertScript(data, file){
  var bodyReg = /<\/body>/,
    headReg = /<\/head>/,
    basename = path.basename(file.path, '.html'),
    commonStr, htmlStr, linkStr;

  if(isRelease()){
    commonStr = 'common-bundle.min.js';
    htmlStr = basename + '-bundle.min.js';
    linkStr = basename + '.min.css';
  }else{
    commonStr = 'common-bundle.js';
    htmlStr = basename + '-bundle.js';
    linkStr = basename + '.css';
  }

  return data.replace(bodyReg, function(){
      return '<script type="text/javascript" src="./' + commonStr + '"></script>'+
              '<script type="text/javascript" src="./'+ htmlStr + '"></script>'+
              '</body>';
    })
    .replace(headReg, function(){
      return '<link type="text/css" rel="stylesheet" href="./' + linkStr + '"/>'+
              '</head>';
    });
}