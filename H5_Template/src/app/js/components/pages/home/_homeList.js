var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('material-ui');
var Paper = mui.Paper;
var RaisedButton = mui.RaisedButton;

var appConfig = require('../../../utils/AppDataUtils').select("appConfig");
var homeDATA = require('../../../utils/AppDataUtils').select("home");
var tp = require('../../../../../libs/utils/translate').onTranslatepage;

function getInitState() {
    var _pages = appConfig.select("pages").get() ,listItems = [];
    _pages.forEach(function (page,index) {
        if(page != 'home'){
            var te = {
                route:page,
                text:tp(page)
            };
            listItems.push(te);
        }
    });

    return {
        list: listItems
    };
}

var Kpad = React.createClass({
    displayName: "Kpad",
    mixins: [Router.State],
    getStyles:function() {
        return {
            raisedButton:{
                float:'right'
            }
        }

    },
    getDefaultProps: function() {
        var self = this ,listItems = [];

        return {
            list: listItems
        };
    },
    getInitialState: function() {
        var _getInitState = getInitState.bind(this);
        return _getInitState();
    },
    render: function () {
        var styles = this.getStyles(), self = this;
        var listDATA = this.state.list.map(function (item,i) {
            var go = self._onGo.bind(self, item, i);
            return (
                <li  key={i} >
                    <Paper zDepth={5} className='cf'>
                        <div className='paper_content cf'>
                            <h2>{item.text}</h2>
                            <RaisedButton
                                label='GO'
                                style={styles.raisedButton}
                                ref={'page_' + i}
                                onClick={go} />
                        </div>
                    </Paper>
                </li>
            );
        });
        return (
            <ul id="home_list" className="home_list cf">
                {listDATA}
            </ul>
        );
    },
    _onGo:function(item, index){
        homeDATA.set('title', item.text);
        this.context.router.transitionTo(item.route);
    }
});

module.exports = Kpad;