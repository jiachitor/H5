var Promise = require('es6-promise').Promise;
var extend = require('lodash/object/assign');
var Ajax = function (url, options) {
    if (typeof url !== 'string' || url.trim() === '') {
        throw new Error('[Promi se Ajax]: invalid url');
    }
    return new Promise(function (resolve, reject) {
        options = extend({
            url: url,
            success: function (data, textStatus, xhr) {
                resolve({
                    data: data,
                    textStatus: textStatus,
                    xhr: xhr
                });
            },
            error: function (xhr, textStatus, errThrown) {
                reject({
                    xhr: xhr,
                    textStatus: textStatus,
                    error: errThrown
                });
            }
        }, options);
        $.ajax(options);
    });
};

Ajax.get = function (url, options) {
    return Ajax(url, extend({
        type: 'GET',
        traditional: true
        // dataType: 'json',
        // timeout: 60 * 1000,
    }, options));
};

Ajax.getJSON = function (url, options) {
    return Ajax(url, extend({
        type: 'GET',
        traditional: true,
        dataType: 'json'
    }, options));
};

Ajax.post = function (url, options) {
    return Ajax(url, extend({
        type: 'POST',
        dataType: 'json'
    }, options));
};

module.exports = Ajax;