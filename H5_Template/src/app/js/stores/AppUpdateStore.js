var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppUpdateActionTypes = AppConstants.AppUpdateActionTypes;
var CHANGE_EVENT = 'change';
var FAIL_EVENT = 'fail';
var LOAD_EVENT = 'load';
var DELETE_EVENT = 'delete';

var AppUpdateDATA = require('../utils/AppDataUtils').select("appUpdate");


var successData = null;
var _messages = {};

var AppUpdateStore = assign({}, EventEmitter.prototype, {
    //该组件触发更新
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    emitFail: function () {
        this.emit(FAIL_EVENT);
    },
    emitLoad: function () {
        this.emit(LOAD_EVENT);
    },
    emitDelete:function(){
        this.emit(DELETE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(FAIL_EVENT, callback);
    },
    addFailListener: function (callback) {
        this.on(FAIL_EVENT, callback);
    },
    removeFailListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    addLoadListener: function (callback) {
        this.on(LOAD_EVENT, callback);
    },
    removeLoadListener: function (callback) {
        this.removeListener(LOAD_EVENT, callback);
    },
    addDeleteListener: function (callback) {
        this.on(DELETE_EVENT, callback);
    },
    removeDeleteListener: function (callback) {
        this.removeListener(DELETE_EVENT, callback);
    },
    test:function(){

    }
});

//dispatchToken 用于 waitFor

AppUpdateStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {
        case AppUpdateActionTypes.BEFORE_SUBMIT:

            //ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
            //_markAllInThreadRead(ThreadStore.getCurrentID());
            break;

        case AppUpdateActionTypes.SUCCESS_SUBMIT:
            successData = action.successData;
            //ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
            //_markAllInThreadRead(ThreadStore.getCurrentID());
            AppUpdateStore.emitChange();
            break;

        case AppUpdateActionTypes.FAILED_SUBMIT:
            faliedData = action.faliedData;
            AppUpdateStore.emitFail();
            break;


        default:
        // do nothing
    }

});

module.exports = AppUpdateStore;
