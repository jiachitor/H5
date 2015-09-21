var src = './src/',
    build = './build/',
    htmls = ['index'],
    langs = ['en'],
    environment = ['build','develop'],
    pages = ['tpl/judge_one'],
    watch_pages = ['tpl/judge_one','tpl/_demo'],
    dest = {
        "entries": ["app.js"],
        "outputFile": "app.bundle.js",
        "dependencies": "react"
    };

module.exports = {
    'jshint': {
        src: src + watch_pages[0] + '/**/*.js'
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
    'sass': {
        src: src,
        pages: pages,
        watch_pages: watch_pages
    },
    'watch': {
        src: src,
        watch_pages: watch_pages
    }
};