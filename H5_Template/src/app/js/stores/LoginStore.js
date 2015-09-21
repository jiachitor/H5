var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var LoginUtils = require('../utils/LoginUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var LoginActionTypes = AppConstants.LoginActionTypes;
var CHANGE_EVENT = 'change';

var successData = null;
var _messages = {};

var LoginStore = assign({}, EventEmitter.prototype, {
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
    test:function(){

    }
});

//dispatchToken 用于 waitFor

LoginStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {
        case LoginActionTypes.BEFORE_LOGIN:

            //ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
            //_markAllInThreadRead(ThreadStore.getCurrentID());
            break;

        case LoginActionTypes.SUCCESS_LOGIN:
            successData = action.successData;
            //ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
            //_markAllInThreadRead(ThreadStore.getCurrentID());
            LoginUtils.setLoginInfo(successData);
            LoginStore.emitChange();
            break;

        case LoginActionTypes.FAILED_LOGIN:
            //var message = ChatMessageUtils.getCreatedMessageData(
            //    action.text,
            //    action.currentThreadID
            //);
            //_messages[message.id] = message;
            break;

        default:
        // do nothing
    }

});

module.exports = LoginStore;
