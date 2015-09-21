var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var mui = require('material-ui');
var Tabs = mui.Tabs;
var Tab = mui.Tab;

var appConfig = require('../../../../utils/AppDataUtils').select("appConfig");
var tplCreateDATA = require('../../../../utils/AppDataUtils').select("tpl_create");
var TplCfgDATA = tplCreateDATA.select("tpl_cfg"),
    tplCfg_data_DATA = TplCfgDATA.select("data"),
    tplCfg_data_pages_DATA = tplCfg_data_DATA.select("pages");
var InitPageDATA = tplCreateDATA.select("init_page");

function getInitState() {
    //…Ë÷√tabµƒœ‘ æ
    var _collection = this.props.selectPageData.collection,
        _tabs_active_index = 0;
    if(_collection == "default"){
        _tabs_active_index = 1;
    }

    return {
        tabs_active_index:_tabs_active_index,
        selectPageData:this.props.selectPageData,
        activeIndex:this.props.activeIndex
    };
}

var SetBar = React.createClass({
    displayName: "SetBar",
    mixins: [Router.State],
    getStyles:function() {
        return {
            tabs:{
                marginTop:"20px"
            },
            tab:{
                padding:"15px 0"
            },
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
        if(this.state.tabs_active_index == 0){
            this.context.router.transitionTo("tpl_create_edit");
        }else if(this.state.tabs_active_index == 1){
            this.context.router.transitionTo("tpl_create_template");
        }
    },
    componentWillReceiveProps:function(nextProps){
        this.setState({
            selectPageData:nextProps.selectPageData,
            activeIndex:nextProps.activeIndex
        });
    },
    render: function () {
        var self = this, styles = this.getStyles(), items =[] ,tab_active;

        return (
            <div className="set-bar">
                <Tabs style={styles.tabs} initialSelectedIndex={this.state.tabs_active_index}>
                    <Tab
                        label="Edit"
                        route="tpl_create_edit"
                        onActive={this._onActive} />
                    <Tab
                        label="Single page template"
                         route="tpl_create_template"
                         onActive={this._onActive} />
                </Tabs>
                <RouteHandler
                    key={name}
                    selectPageData={this.props.selectPageData}
                    activeIndex={this.props.activeIndex}/>
            </div>
        );
    },
    _onActive:function(tab){
        this.context.router.transitionTo(tab.props.route);
    }
});

module.exports = SetBar;