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
    signin: function (params) {
        return ajax.post('/admin/api/signin', {
            data: {
                user_name: params.name,
                hashed_password: SHA1(params.password + '')
            },
            headers: {
                'SESSION-TOKEN': 'sign-in',
                'accepts': 'text/html'
            }
        })
            .then(function (res) {
                return res.data;
            }).then(function (data) {
                return data;
            });
    }
};
