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

var appConfig = require('../utils/AppDataUtils').select("appConfig");

module.exports = {
    setLoginInfo: function (data) {
        var loginInfo = {
            "use": "broswer",
            "signedIn": true,
            "usrName": "tests",
            "token": data.token,
            "curLocale": appConfig.get("locale"),
            "isUserManager": data.user_manage
        }
        appConfig.set("localStorageConfig",loginInfo);
        localStorage.set("config_h5",loginInfo);
    },
    setLoginOut: function () {
        localStorage.remove("config_h5");
    }
};
