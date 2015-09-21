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
var localStorage = require('store2');

var useFor = require('../../../libs/utils/differentiate');
var appConfig = require('../utils/AppDataUtils').select("appConfig");

module.exports = {
    GetLoginInfo: function () {
        localStorage.remove("debug");
        if(localStorage.has("config_h5")){
            return localStorage.get("config_h5");
        }else{
            return false;
        }
    },
    whetherLogin:function(){
        var _conf = this.GetLoginInfo();
        var info = {
            config:_conf,
            whether:_conf.signedIn ? true : false
        }
        return info;
    },
    setLocale:function(lo){
        var config = this.GetLoginInfo();
        config.curLocale = lo;
        localStorage.set("config_h5",config);
    }
};
