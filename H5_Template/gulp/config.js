var src = './src/',
    build = './build/',
    htmls = ['index'],
    langs = ['en'],
    environment = ['build','develop'],
    pages = ['app'],
    watch_pages = ['app'],
    dest = {
        "entries": ["app.js"],
        "outputFile": "app.bundle.js",
        "dependencies": "react"
    };

var options = {
    userName: 'baina',
    password: '123456',
    privateKey: 'baina.key',
    srcPath: '../build',
    buildPath: '../deploy/build',
    packageName: 'dzone-console-1.0dev',
    packageDir: '/var/app/weibonews/available/r',
    appName: 'dzone_console',
    appDir: '/var/app/weibonews/enabled',
};


module.exports = {
    'jshint': {
        src: src + '**/*.js',
    },
    'browserSync':{
        browser: ["google chrome"],
        port: 3000,
        server: {
            baseDir: src
        }
    },
    'browserify': {
        src: src,
        pages: pages,
        watch_pages: watch_pages,
        langs: langs,
        dest: dest
    },
    'less': {
        src: src,
        pages: pages
    },
    'sass': {
        src: src,
        pages: pages
    },
    'watch': {
        src: src
    },
    'set_env': {
        environment: environment
    },
    'i18n': {
        langs: langs
    },
    'copy-html': {
        src: src,
        htmls: htmls
    },
    'copy-assets': {
        src: src + 'assets/**'
    },
    'embed': {
        css: true,
        common: false, //用于配置common-bundle.js(或.min.js)是否内嵌
        js: false   //可以省略，默认为false
    },
    'deploy':{
        options: options
    }
};