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

var keyMirror = require('keymirror');

module.exports = {
    LoginActionTypes: keyMirror({
        BEFORE_LOGIN: null,
        SUCCESS_LOGIN: null,
        FAILED_LOGIN: null
    }),
    HomeActionTypes: keyMirror({
        SHOWLEFTNAV:null,
        SHOWRIGHTNAV: null
    }),
    AppUpdateActionTypes: keyMirror({
        BEFORE_SUBMIT: null,
        SUCCESS_SUBMIT: null,
        FAILED_SUBMIT: null,
    })

};
