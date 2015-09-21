var _ = require('lodash');

//ģ����������
var TPL_1_data = require('./tpl_1_data.js');
var pages = TPL_1_data.data.pages;
var tpls = TPL_1_data.data.tpl;

//ģ����뷽��
function compile(_source, _layout) {
    var template, result;
    template = Handlebars.compile(_source);
    result = template(_layout);
    return result;
}

//���� iSlider ����������
var list = [];

//����ģ������
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

//ʵ����
var islider = new iSlider({
    data: list,
    type: 'dom',
    dom: document.getElementById("iSlider"),
    duration: 1000,
    isVertical: true
});