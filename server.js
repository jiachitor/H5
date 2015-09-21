var url = require('url'),
    util = require('util'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    os = require('os');

var koa = require('koa'),
    logger = require('koa-logger'),
    router = require('koa-router')(),
    serve = require('koa-static'),
    proxy = require('koa-proxy');

var hasOwn = function (obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
};

var extend = function (target /*,objs*/) {
    var i = 1,
        key, cur;
    if (target === undefined || target === null) {
        target = {};
    }
    while (cur = arguments[i++]) {
        for (key in cur) {
            if (hasOwn(cur, key)) {
                target[key] = cur[key];
            }
        }
    }
    return target;
};

// choose test server
var PROXY_HOST = "";
var argv = process.argv.slice(2);
if (argv[0] === '--wh') {
    PROXY_HOST = "172.16.77.64";
} else {
    console.log('Usage: node [filename] --[ --wh ]');
    process.exit();
}

var app = koa();

//app.use(logger());

app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    //console.log('%s %s %s - %sms', this.host, this.method, this.url, ms);
});

var wwwroot_dir = __dirname;
var uploadDir = wwwroot_dir + '/uploaded/files';
var oneDay = 86400000;

//这里就可以启动一个静态服务器
app.use(serve(__dirname),{defer:true});

router.get('/admin/api/*', function *(next) {
    console.log("begin!  " + this.request.url);
    yield next;
    console.log("end!  " + this.request.url);
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(function *(next){
    this.request.url = this.request.url.replace(/(\/admin\/api\/infostream\/)/, '/api/infostream/')
        .replace(/(\/admin\/track\/)/, '/track/')
        .replace(/(\/admin\/relevance\/)/, '/relevance/');
    console.log("[proxy url]" + this.request.url);
    console.log("------------------------------------");
    yield next;
    /*这里可以配置response 各项值*/
    //console.log(this.response);
});

app.use(proxy({
    host: 'http://' + PROXY_HOST
}));

app.listen(3000);
console.log('Koa server listening on port 3000!');

