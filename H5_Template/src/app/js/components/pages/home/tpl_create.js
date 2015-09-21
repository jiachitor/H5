var React = require('react');
var Router = require('react-router');

var PageBar = require('./tpl_create/page_bar.js');
var ViewBox = require('./tpl_create/view_box.js');
var SetBar  = require('./tpl_create/set_bar.js');
var GlobalBar = require('./tpl_create/global-bar.js');
var YYLeft = require('./tpl_create/yy_left_line.js');
var YYRight = require('./tpl_create/yy_right_line.js');

var appConfig = require('../../../utils/AppDataUtils').select("appConfig");
var tplCreateDATA = require('../../../utils/AppDataUtils').select("tpl_create");
var TplCfgDATA = tplCreateDATA.select("tpl_cfg"),
    tplCfg_data_DATA = TplCfgDATA.select("data"),
    tplCfg_data_pages_DATA = tplCfg_data_DATA.select("pages");
var ActiveIndexDATA = tplCreateDATA.select("activeIndex");
var InitPageDATA = tplCreateDATA.select("init_page");

function getInitState() {
    //≥ı ºªØ
    var _pagesData = tplCfg_data_pages_DATA.get();
    if(_pagesData.length == 0){
        _pagesData.push(InitPageDATA.get());
    }
    return {
        page_bar_pages:_pagesData,
        selectPageDATA: _pagesData[0],
        page_bar_activeIndex:0
    };
}

var TplCreate = React.createClass({
    displayName: "TplCreate",
    mixins: [Router.State],
    getInitialState: function() {
        var _getInitState = getInitState.bind(this);
        return _getInitState();
    },
    componentDidMount: function() {
        var self = this;
        ActiveIndexDATA.on('update', function() {
            var _activeIndex = ActiveIndexDATA.get();
            self.setState({
                page_bar_activeIndex:_activeIndex,
                selectPageDATA: tplCfg_data_pages_DATA.select(_activeIndex).get()
            });
        });
        tplCfg_data_pages_DATA.on('update', function() {
            var _activeIndex = ActiveIndexDATA.get();
            self.setState({
                page_bar_pages:tplCfg_data_pages_DATA.get(),
                selectPageDATA: tplCfg_data_pages_DATA.select(_activeIndex).get(),
            });
        });
        //AppUpdateStore.addChangeListener(this._onChange);
        //AppUpdateStore.addFailListener( this._onFail);
    },
    componentWillUnmount: function() {
        //AppUpdateStore.removeChangeListener(this._onChange);
        //AppUpdateStore.removeFailListener(this._onFail);
    },
    render: function () {
        return (
            <div id="tpl_create" className="tpl_create cf">
                <PageBar
                    pages={this.state.page_bar_pages}
                    activeIndex={this.state.page_bar_activeIndex} />
                <YYLeft />
                <ViewBox
                    selectPageData={this.state.selectPageDATA}
                    activeIndex={this.state.page_bar_activeIndex} />
                <SetBar
                    selectPageData={this.state.selectPageDATA}
                    activeIndex={this.state.page_bar_activeIndex} />
                <YYRight />
                <GlobalBar
                    activeIndex={this.state.page_bar_activeIndex} />
            </div>
        );
    }
});

module.exports = TplCreate;