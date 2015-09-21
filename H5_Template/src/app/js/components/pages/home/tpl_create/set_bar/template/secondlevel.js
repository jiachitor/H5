var React = require('react');

var appConfig = require('../../../../../../utils/AppDataUtils').select("appConfig");
var tplCreateDATA = require('../../../../../../utils/AppDataUtils').select("tpl_create");
var TplCfgDATA = tplCreateDATA.select("tpl_cfg"),
    tplCfg_data_DATA = TplCfgDATA.select("data"),
    tplCfg_data_pages_DATA = tplCfg_data_DATA.select("pages");
var TemplateListDATA = tplCreateDATA.select("templateList");
var ActiveIndexDATA = tplCreateDATA.select("activeIndex");
var TemplateActiveIndexDATA = tplCreateDATA.select("templateActiveIndex");


function getInitState() {
    var _pages = tplCfg_data_pages_DATA.get(),
        _activeIndex = ActiveIndexDATA.get(),
        _templateactiveIndex = TemplateActiveIndexDATA.get(),
        _templateList = TemplateListDATA.select(_templateactiveIndex).select("collectionTPLs").get();
    return {
        templateList:_templateList
    };
}

var tplSecondLevel = React.createClass({
    displayName: "tplSecondLevel",
    getStyles:function() {
        return {
            tabs:{
                marginTop:"20px"
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
        var self = this, styles = this.getStyles(), items =[], select_class;
        console.log(this.state.templateList)
        return (
            <ul className="set-bar-list cf">
                {this.state.templateList.map(function(item, i) {
                    var boundClick = this.handleClick.bind(this,item, i);
                    return (
                        <li onClick={boundClick} key={i} ref={'item' + i}>
                            <a>
                                <img src={item.imgUrl} />
                                <span></span>
                            </a>
                            <p>{item.title}</p>
                        </li>
                    );
                }, this)}
            </ul>
        );
    },
    handleClick:function(item, i){
        console.log(item)
    }
});

module.exports = tplSecondLevel;