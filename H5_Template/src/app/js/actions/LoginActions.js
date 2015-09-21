/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var LoginUtils = require('../utils/LoginUtils');
var LoginAPI = require('../webapi/LoginAPI');

var LoginActionTypes = AppConstants.LoginActionTypes;

module.exports = {
    //检查值的合法性
    check: function (text) {
        //AppDispatcher.dispatch({
        //    type: LoginActionTypes.CREATE_MESSAGE,
        //    text: text,
        //    currentThreadID: currentThreadID
        //});
        return true;
    },
    login:function(name, password){
        var self = this;
        this.beforeLogin();
        var params = {
            name: name,
            password: password
        };
        LoginAPI.signin(params).then(function (data) {
            if (data.sta === 0 || /refresh\s+please/.test(data.tips)) {
                self.successLogin(data);
            } else {
                self.failedLogin(data);
            }
        });
    },
    beforeLogin:function(){
        AppDispatcher.dispatch({
            type: LoginActionTypes.BEFORE_LOGIN
        });
    },
    successLogin:function(data){
        AppDispatcher.dispatch({
            type: LoginActionTypes.SUCCESS_LOGIN,
            successData: data
        });
    },
    failedLogin:function(data){
        AppDispatcher.dispatch({
            type: LoginActionTypes.FAILED_LOGIN,
            faliedData: data
        });
    }

};
