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

var PageBar = React.createClass({
    displayName: "PageBar",
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
    _pageBarScroll: function () {
        var _height = $("#app_pages").height() - 84;
        return $("#J_ScrollContainer").slimScroll({
            height: _height,
            width: "100%",
            railColor: '#f00'
        });
    },
    componentDidMount: function() {
        this._pageBarScroll();
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
                    iconClassName="muidocs-icon-custom-github"
                    iconStyle={styles.iconButton}
                    onClick={this._onLeftIconButtonTouchTap} />
            </div>
        );

        var pageBarList = this.props.pages.map(function(item, i) {
            var go = self._onGo.bind(self, item, i),
                del = self._onDel.bind(self, item, i),
                show_num = i + 1;
            if(i == self.props.activeIndex){
                return (
                    <li key={i} className='active'>
                        <a className='vertical-align' onClick={go}>
                            <b className='vertical-align-middle'>{{show_num}}</b>
                        </a>
                        <span className='act-bar'onClick={del}></span>
                    </li>
                );
            }else{
                return (
                    <li key={i}>
                        <a className='vertical-align' onClick={go}>
                            <b className='vertical-align-middle'>{{show_num}}</b>
                        </a>
                    </li>
                );
            }

        });

        return (
            <div className="page-bar">
                <div className="app-pages" id="app_pages">
                    <div id="J_ScrollContainer">
                        <div className="rollbar-content">
                            <div className="logo">{githubButton}</div>
                            <ul className="page-list" id="J_PageList">
                                {pageBarList}
                            </ul>
                            <div className="create-page" id="J_CreatePage" onClick={this._onAdd}>
                                <span className="mi-icons mi-icons-plus"></span>
                            </div>
                        </div>
                    </div>
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
    _onAdd:function(item, i){
        var _initPage = InitPageDATA.get();
        tplCfg_data_pages_DATA.push(_initPage);
    },
    _onDel:function(item, i){
        tplCfg_data_pages_DATA.splice([i,1]);
    },
    _onLeftIconButtonTouchTap:function(){
        HomeActions.showLeftNav();
    },
});

module.exports = PageBar;