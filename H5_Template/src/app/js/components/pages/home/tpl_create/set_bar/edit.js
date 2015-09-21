"use strict";

var React = require('react');
var mui = require('material-ui');

var Text = require('./edit/text');

var appConfig = require('../../../../../utils/AppDataUtils').select("appConfig");
var tplCreateDATA = require('../../../../../utils/AppDataUtils').select("tpl_create");
var TplCfgDATA = tplCreateDATA.select("tpl_cfg"),
    tplCfg_data_DATA = TplCfgDATA.select("data"),
    tplCfg_data_pages_DATA = tplCfg_data_DATA.select("pages");
var EidtingItemTipDATA = tplCreateDATA.select("eidtingItemTip");

function getInitState() {
    return {
        selectPageData:this.props.selectPageData,
        activeIndex:this.props.activeIndex,
        editingItemData:{
            "content":"",
            "style":{}
        }
    };
}

var SetBarEdit = React.createClass({
    displayName: "SetBarEdit",
    getStyles:function() {
        return {
            content:{
                width:"100%"
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
        var self = this;
        //AppUpdateStore.addChangeListener(this._onChange);
        //AppUpdateStore.addFailListener( this._onFail);
        EidtingItemTipDATA.on('update', function() {
            var _layout = self.state.selectPageData.layout;
            self.setState({
                editingItemData:_layout[EidtingItemTipDATA.get()]
            });
        });
    },
    componentWillReceiveProps:function(nextProps){
        if(this.props.activeIndex == nextProps.activeIndex ){
            this.setState({
                selectPageData:nextProps.selectPageData,
                editingItemData:nextProps.selectPageData.layout[EidtingItemTipDATA.get()]
            });
        }else{
            this.setState({
                selectPageData:nextProps.selectPageData,
                activeIndex:nextProps.activeIndex,
                editingItemData:{
                    "content":"",
                    "style":{}
                }
            });
        }
    },
    componentWillUnmount: function() {
        //AppUpdateStore.removeChangeListener(this._onChange);
        //AppUpdateStore.removeFailListener(this._onFail);
    },
    render: function () {
        let self = this, styles = this.getStyles();

        let editArea;

        switch (this.state.editingItemData.type) {
            case "text":
                editArea = <Text editingItemData={this.state.editingItemData}/>;
                break;
            case "image":
                x="Today it's Sunday";
                break;
            default:
                editArea = null;
        }


        return (
            <div  className="edit_box">
                {editArea}
            </div>
        );
    },
    _handleInputChange:function(e){
        var _val = e.target.value;
    },
    handleClick:function(item, i){

    }
});

module.exports = SetBarEdit;