var en = require('./translation/en.json');
var country = require('./translation/country.json');
var page = require('./translation/page.json');

var translationMap = en;

//var translationMap = {
//  'zh-cn': zh,
//  'en': en,
//  'all': en.all
//};

var translateLang = function (key) {
    var transObject = translationMap[key] || {};
    return function (id) {
        return transObject[id] || id;
    };
};

var translateCountry = function (key) {
    var transObject = country[key] || {};
    return transObject;
};

var translatepage = function (key) {
    var transObject = page[key] || {};
    return transObject;
};


module.exports = {
    onTranslateLang: translateLang,
    onTranslateCountry: translateCountry,
    onTranslatepage:translatepage
};
