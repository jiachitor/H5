"use strict";

var React = require('react');
var mui = require('material-ui');
var TextField = mui.TextField;
var RaisedButton = mui.RaisedButton;

//var AppUpdateActions = require('../../../../actions/appUpdateActions');
//var AppUpdateStore = require('../../../../stores/AppUpdateStore.js');

var appConfig = require('../../../../../../utils/AppDataUtils').select("appConfig");
var tplCreateDATA = require('../../../../../../utils/AppDataUtils').select("tpl_create");
var TplCfgDATA = tplCreateDATA.select("tpl_cfg"),
    tplCfg_data_DATA = TplCfgDATA.select("data"),
    tplCfg_data_pages_DATA = tplCfg_data_DATA.select("pages");
var ActiveIndexDATA = tplCreateDATA.select("activeIndex");
var EidtingItemTipDATA = tplCreateDATA.select("eidtingItemTip");

function getInitState() {
    return {
        type: this.props.editingItemData.type,
        content:this.props.editingItemData.content,
        style:this.props.editingItemData.style
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

    },
    componentWillReceiveProps:function(nextProps){
        this.setState({
            content:nextProps.editingItemData.content,
            style:nextProps.editingItemData.style
        });
    },
    componentWillUnmount: function() {
        //AppUpdateStore.removeChangeListener(this._onChange);
        //AppUpdateStore.removeFailListener(this._onFail);
    },
    render: function () {
        var self = this, styles = this.getStyles();

        return (
            <div className="edit_module">
                <div className="edit_module_head cf">
                    <RaisedButton label="Save" primary={true} onClick={this._onSave}/>
                </div>
                <TextField
                    style={styles.content}
                    value={this.state.content}
                    multiLine={true}
                    onChange={this._handleInputChange}/>
                <div className="edit_module_more edit_module_color">
                    <h6>字体颜色</h6>
                    <div className="edit-select-color cf">
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(0, 0, 0)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(139, 139, 139)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(255, 255, 255)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(195, 229, 168)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(136, 203, 85)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(87, 140, 46)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(239, 246, 173)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(222, 236, 95)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(254, 251, 176)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(253, 246, 102)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(242, 233, 51)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(251, 222, 157)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(248, 192, 66)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(198, 140, 31)'}}></div>
                        </div>
                        <div className="edit-color-box select">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(250, 209, 156)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(246, 164, 63)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(248, 183, 157)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(244, 111, 64)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(204, 60, 22)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(246, 163, 160)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(242, 74, 71)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item"></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(132, 20, 63)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(238, 145, 179)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(218, 28, 104)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(132, 20, 63)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(216, 123, 251)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(101, 26, 140)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(172, 52, 235)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(101, 26, 140)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(160, 119, 250)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(74, 46, 226)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(42, 22, 128)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(153, 184, 252)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(51, 115, 249)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(31, 67, 201)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(137, 222, 251)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(72, 187, 249)'}}></div>
                        </div>
                        <div className="edit-color-box">
                            <div className="edit-color-item" style={{backgroundColor: 'rgb(44, 122, 162)'}}></div>
                        </div>
                    </div>
                </div>
                <div className="edit_module_more edit_module_font">
                    <h6>字体大小</h6>
                    <ul className='cf'>
                        <li><a href="javascript:void(0);" className='fz-18'>中(18px)</a></li>
                        <li><a href="javascript:void(0);" className='fz-24'>大(24px)</a></li>
                        <li><a href="javascript:void(0);" className='fz-28'>中大(28px)</a></li>
                        <li><a href="javascript:void(0);" className='fz-32'>特大(32px)</a></li>
                        <li><a href="javascript:void(0);" className='fz-36'>极大(36px)</a></li>
                        <li><a href="javascript:void(0);" className='fz-48'>超级大(48px)</a></li>
                        <li><a href="javascript:void(0);" className='fz-52'>特级大(52px)</a></li>
                    </ul>
                </div>
            </div>
        );
    },
    _handleInputChange:function(e){
        var _val = e.target.value;
        this.setState({
            content:_val,
        });
    },
    handleClick:function(item, i){

    },
    _onSave:function(){
        var selectPageData =  tplCfg_data_pages_DATA.select(ActiveIndexDATA.get());
        var layout = selectPageData.select("layout");
        var _editData = {
            type:this.state.type,
            content:this.state.content,
            style:this.state.style
        };
        layout.set(EidtingItemTipDATA.get(),_editData);
    }
});

module.exports = SetBarEdit;