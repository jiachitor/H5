var React = require('react');

//var AppUpdateActions = require('../../../../actions/appUpdateActions');
//var AppUpdateStore = require('../../../../stores/AppUpdateStore.js');

var appConfig = require('../../../../utils/AppDataUtils').select("appConfig");
var tplCreateDATA = require('../../../../utils/AppDataUtils').select("tpl_create");
var TplCfgDATA = tplCreateDATA.select("tpl_cfg"),
    tplCfg_data_DATA = TplCfgDATA.select("data"),
    tplCfg_data_pages_DATA = tplCfg_data_DATA.select("pages");

//模板列表
var mainTPL = require('../tpl_module/main');
var JudgeOneTPL = mainTPL.JudgeOneTPL;

function getInitState() {
    //初始化数据，默认打开第一屏
    return {
        collection:this.props.selectPageData.collection,
        tplIndex:this.props.selectPageData.tplIndex,
        layout:this.props.selectPageData.layout
    };
}

var ViewBox = React.createClass({
    displayName: "ViewBox",
    getStyles:function() {
        return {
            radioButton:{
                display: 'inline-block',
                width:'auto',
                marginRight:'40px',
                marginTop:'12px'
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
        //AppUpdateStore.addChangeListener(this._onChange);
        //AppUpdateStore.addFailListener( this._onFail);
    },
    componentWillReceiveProps:function(nextProps){
        this.setState({
            collection:nextProps.selectPageData.collection,
            tplIndex:nextProps.selectPageData.tplIndex,
            layout:nextProps.selectPageData.layout
        });
    },
    componentWillUnmount: function() {
        //AppUpdateStore.removeChangeListener(this._onChange);
        //AppUpdateStore.removeFailListener(this._onFail);
    },
    render: function () {
        var self = this, styles = this.getStyles(), TPL;

        switch(this.state.collection)
        {
            case "judge_one":
                TPL = JudgeOneTPL[this.state.tplIndex];
                break;
            case 2:

                break;
            default:
                break;
        }
        return (
            <div className="view-box vertical-align">
                <div className="phone vertical-align-middle">
                    <div className='edit-page-phone'>
                        <TPL
                            data={this.state.layout}/>
                    </div>
                    <div className="edit-page-preview"></div>
                </div>
            </div>
        );
    }
});

module.exports = ViewBox;