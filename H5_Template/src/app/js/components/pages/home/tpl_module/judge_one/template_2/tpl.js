var React = require('react');

var appConfig = require('../../../../../../utils/AppDataUtils').select("appConfig");
var tplCreateDATA = require('../../../../../../utils/AppDataUtils').select("tpl_create");
var TplCfgDATA = tplCreateDATA.select("tpl_cfg"),
    tplCfg_data_DATA = TplCfgDATA.select("data"),
    tplCfg_data_pages_DATA = tplCfg_data_DATA.select("pages");
var ActiveIndexDATA = tplCreateDATA.select("activeIndex");
var EidtingItemTipDATA = tplCreateDATA.select("eidtingItemTip");

function getInitState() {
    return {
        data:this.props.data
    };
}

var Template = React.createClass({
    displayName: "Template",
    getStyles:function() {
        return {
            series:{
                "color":this.state.data.series.style.color,
                "fontSize":this.state.data.series.style.fontSize
            },
            ques:{
                "fontSize":this.state.data.ques.style.fontSize
            }
        };
    },
    getInitialState: function() {
        var _getInitState = getInitState.bind(this);
        return _getInitState();
    },
    componentWillReceiveProps:function(nextProps){
        this.setState({
            data: nextProps.data
        });
    },
    render: function() {
        var self = this, styles = this.getStyles();
           //<a href="#"><img src="./img/banner.png"></a>
        return (
            <div className="judge_one_wrapper question-wrapper">
                <div className="banner">
                    <a href="">
                        <img src="../../../../../../../../tpl/judge_one/img/banner.png" />
                    </a>
                </div>
                <p
                    className="series editing"
                    style={styles.series}
                    onClick={this._onEdit.bind(null,"series")}>
                    {this.state.data.series.content}
                </p>
                <div className="question" data-index={this.state.data.index.content}>
                    <div className="ques">
                        <p
                            style={styles.ques}
                            className="editing"
                            onClick={this._onEdit.bind(null,"ques")} >
                            {this.state.data.ques.content}
                        </p>
                        <div className="result right"></div>
                        <div className="result wrong"></div>
                    </div>
                    <ul className="icons">
                        <li>
                            <div className="icon" data-index="0">
                                <i className="right-btn"></i>
                            </div>
                            <div className="icon right" data-index="1">
                                <i className="wrong-btn"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    },
    _onEdit:function(_tip){
        //var _tip = $(e.target).data("tip");
        EidtingItemTipDATA.set(_tip);
    }
});

module.exports = Template;