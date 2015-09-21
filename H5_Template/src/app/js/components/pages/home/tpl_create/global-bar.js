var React = require('react');
var mui = require('material-ui');
var IconButton = mui.IconButton;

var HomeActions = require('../../../../actions/HomeActions');

var appConfig = require('../../../../utils/AppDataUtils').select("appConfig");
var tplCreateDATA = require('../../../../utils/AppDataUtils').select("tpl_create");
var TplCfgDATA = tplCreateDATA.select("tpl_cfg"),
    tplCfg_data_DATA = TplCfgDATA.select("data"),
    tplCfg_data_pages_DATA = tplCfg_data_DATA.select("pages");
var InitPageDATA = tplCreateDATA.select("init_page");
var ActiveIndexDATA = tplCreateDATA.select("activeIndex");



function getInitState() {
    var _activeIndex = this.props.activeIndex;
    return {
        activeIndex:_activeIndex
    };
}

var GlobalBar = React.createClass({
    displayName: "GlobalBar",
    getStyles:function() {
        return {
            radioButton:{
                display: 'inline-block',
                width:'auto',
                marginRight:'40px',
                marginTop:'12px'
            },
            iconButton:{
                color:'#fff'
            }
        };
    },
    getDefaultProps: function() {
        var self = this ;

        return {
            navTypes: '',
        };
    },
    getInitialState: function() {
        var _getInitState = getInitState.bind(this);
        return _getInitState();
    },

    componentDidMount: function() {
        //AppUpdateStore.addChangeListener(this._onChange);
        //AppUpdateStore.addFailListener( this._onFail);
    },
    componentWillUnmount: function() {
        //AppUpdateStore.removeChangeListener(this._onChange);
        //AppUpdateStore.removeFailListener(this._onFail);
    },
    render: function () {
        var self = this, styles = this.getStyles(), items =[] ,li_active;

        var githubButton = (
            <div>
                <IconButton
                    iconClassName="muidocs-icon-navigation-expand-more"
                    iconStyle={styles.iconButton}
                    onClick={this._onRightIconButtonTouchTap} />
            </div>
        );

        return (
            <div className="global-bar" id="J_GlobalBar">
                <div className="gl-more-show">
                    {githubButton}
                </div>
                <div className="gl-menu">

                </div>
            </div>
        );
    },
    _onGo:function(item, i){
        ActiveIndexDATA.set(i);
        //this.setState({
        //    activeIndex:i
        //});
    },
    _onRightIconButtonTouchTap:function(){
        HomeActions.showRightNav();
    },
});

module.exports = GlobalBar;