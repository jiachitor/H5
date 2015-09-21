var Promise = require('es6-promise').Promise;

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var IndexUtils = require('../utils/IndexUtils');

var IndexActionTypes = AppConstants.IndexActionTypes;

module.exports = {
    ChooseComponent:function(){
        new Promise(function(resolve, reject){
            var loginConf = IndexUtils.GetLoginInfo();
            resolve(loginConf);
        }).then(function (conf) {
                AppDispatcher.dispatch({
                    type: IndexActionTypes.CHOOSE_COMPONENT,
                    loginConfig: conf
                });
            });
    }

};
