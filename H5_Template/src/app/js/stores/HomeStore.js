var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var HomeActionTypes = AppConstants.HomeActionTypes;
var CHANGE_EVENT = 'change';
var SHOWLEFTNAV_EVENT = 'showLeftNav';
var SHOWRIGHTNAV_EVENT = 'showRightNav';

var successData = null;
var _messages = {};

var HomeStore = assign({}, EventEmitter.prototype, {
    //该组件触发更新
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    //该组件触发更新
    emitShowLeftNav: function () {
        this.emit(SHOWLEFTNAV_EVENT);
    },
    addShowLeftNavListener: function (callback) {
        this.on(SHOWLEFTNAV_EVENT, callback);
    },
    removeShowLeftNavListener: function (callback) {
        this.removeListener(SHOWLEFTNAV_EVENT, callback);
    },
    //该组件触发更新
    emitShowRightNav: function () {
        this.emit(SHOWRIGHTNAV_EVENT);
    },
    addShowRightNavListener: function (callback) {
        this.on(SHOWRIGHTNAV_EVENT, callback);
    },
    removeShowRightNavListener: function (callback) {
        this.removeListener(SHOWRIGHTNAV_EVENT, callback);
    },
});

//dispatchToken 用于 waitFor

HomeStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {
        case HomeActionTypes.SHOWLEFTNAV:
            HomeStore.emitShowLeftNav();
            break;
        case HomeActionTypes.SHOWRIGHTNAV:
            HomeStore.emitShowRightNav();
            break;


        default:
        // do nothing
    }

});

module.exports = HomeStore;
