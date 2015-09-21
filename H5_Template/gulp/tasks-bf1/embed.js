var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  modify = require('../utils/dp-gulp-modify');

var fs = require('fs'),
  path = require('path'),
  argv = require('yargs').argv,
  config = require('../config').embed;

gulp.task('embed', function(){
  var processDir = global.buildDir + global.lang + '/';
  return gulp.src(processDir + '*.html')
    .pipe(modify(embedResource))
    .pipe(gulp.dest(processDir));
});

function isRelease(){
  return !!argv.release;
}

function embedResource(data, file){
  var basename = path.basename(file.path, '.html'),
    cssReg = new RegExp('<link[^>]+href=(?:\\"|\\\')\\s*(\\S+' + basename + '.min.css)\\s*(?:\\"|\\\')[^>]*>', 'g'),
    jsReg = new RegExp('<script[^>]+src=(?:\\"|\\\')\\s*(\\S+' + basename + '-bundle.min.js)\\s*(?:\\"|\\\')[^>]*>[^<]*<\\/script>', 'g'),
    commonJsReg = /<script[^>]+src=(?:"|')\s*(\S+common-bundle.min.js)\s*(?:"|')[^>]*>[^<]*<\/script>/g,
    basePath = path.resolve(process.cwd(), global.buildDir+'/'+global.lang+'/');

  if(isRelease()){
    if(config.css){//embed css
      data = data.replace(cssReg, function(m, file){
        var style = fs.readFileSync(path.resolve(basePath, file), 'utf8');
        return '<style>' + style + '</style>';
      });
    }
    if(config.js){
      data = data.replace(jsReg, function(m, file){
        var content = fs.readFileSync(path.resolve(basePath, file), 'utf8');
        return '<script type="text/javascript">' + content + '</script>';
      });
    }
    if(config.common){//embed common-bundle.js
      data = data.replace(commonJsReg, function(m, file){
        var content = fs.readFileSync(path.resolve(basePath, file), 'utf8');
        return '<script type="text/javascript">' + content + '</script>';
      });
    }
  }
  return data;
}