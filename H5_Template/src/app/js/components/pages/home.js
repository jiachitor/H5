var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var RouteHandler = Router.RouteHandler;
var Menu = mui.Menu;
var IconButton = mui.IconButton;
var FlatButton = mui.FlatButton;
var FontIcon = mui.FontIcon;

var HomeActions = require('../../actions/HomeActions');
var HomeStore = require('../../stores/HomeStore');

var AppLeftNav = require('../modules/left-nav.js');
var AppRightNav = require('../modules/right-nav.js');
var appConfig = require('../../utils/AppDataUtils').select("appConfig");
var homeDATA = require('../../utils/AppDataUtils').select("home");
var tc = require('../../../../libs/utils/translate').onTranslateCountry;

var Master = React.createClass({
    displayName: "Master",
    mixins: [Router.State],
    getStyles:function() {
        return {
            chooseCountry:{
                color:'#fff',
                display:'inline-block',
                padding:'4px 10px 6px',
                cursor:'pointer'
            },
        };
    },
    getInitialState: function() {
        return {
            title:homeDATA.get("title"),
            country:this.props.appInitConfig.curLocale
        };
    },
    //在组件挂载发生之前立即被调用
    componentDidMount:function(){
        var self = this;
        homeDATA.on('update', function() {
            self.setState({
                'title':homeDATA.get("title"),
                'country':appConfig.get("locale")
            });
        });
        //注意使用 forceUpdate 之后，就直接执行 render() 了

        HomeStore.addShowLeftNavListener(this._onShowLeftNav);
        HomeStore.addShowRightNavListener(this._onShowRightNav);
    },
    componentWillUnmount: function() {
        HomeStore.removeShowLeftNavListener(this._onShowLeftNav);
        HomeStore.removeShowRightNavListener(this._onShowRightNav);
    },
    render: function () {
        var styles = this.getStyles();


        return (
            <div id="home" className="home">
                <AppLeftNav ref="leftNav" />
                <AppRightNav ref="rightNav" />
                <RouteHandler key={name}/>
            </div>
        );
    },

    _onShowLeftNav: function () {
        this.refs.leftNav._toggle();
    },
    _onShowRightNav:function(){
        this.refs.rightNav._toggle();
    }


});

module.exports = Master;