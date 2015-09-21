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
var ajax = require('../../../libs/utils/ajax');
var SHA1 = require('../../../libs/utils/sha1');
var localStorage = require('store2');
var Promise = require('es6-promise').Promise;

module.exports = {
    getToken:function(){
        if(localStorage.has("config_h5")){
            return localStorage.get("config_h5").token;
        }else{
            if(localStorage.has("config")){
                return localStorage.get("config").token;
            }else{
                return '';
            }
        }
    },
    submit: function (params) {
        var self = this;
        return ajax.post('/admin/api/update/version', {
            data: params,
            headers: {
                'Session-Token': self.getToken()
            }
        })
            .then(function (res) {
                return res.data;
            }).then(function (data) {
                return data;
            });
    }
};
