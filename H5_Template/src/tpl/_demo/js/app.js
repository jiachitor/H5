var _ = require('lodash');

//模拟配置数据
var TPL_1_data = require('./tpl_1_data.js');
var pages = TPL_1_data.data.pages;
var tpls = TPL_1_data.data.tpl;

//模板编译方法
function compile(_source, _layout) {
    var template, result;
    template = Handlebars.compile(_source);
    result = template(_layout);
    return result;
}

//定义 iSlider 的数据数组
var list = [];

//生成模板数组
_.forEach(pages, function (page, i) {
    var _layout, _source, html, item;
    _layout = page.layout;
    _source = tpls[_layout.template];
    html = compile(_source, _layout);
    item = {
        content: html
    };
    list.push(item);
});

//实例化
var islider = new iSlider({
    data: list,
    type: 'dom',
    dom: document.getElementById("iSlider"),
    duration: 1000,
    isVertical: true
});