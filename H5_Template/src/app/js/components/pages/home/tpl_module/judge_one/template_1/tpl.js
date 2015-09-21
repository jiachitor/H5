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
        data: this.props.data
    };
}

var Template = React.createClass({
    displayName: "Template",
    getStyles: function () {
        return {
            homeTitle: {
                "fontSize": this.state.data.homeTitle.style.fontSize
            },
            homeDes: {
                "fontSize": this.state.data.homeDes.style.fontSize
            },
            go: {
                "fontSize": this.state.data.go.style.fontSize
            }
        };
    },
    getInitialState: function () {
        var _getInitState = getInitState.bind(this);
        return _getInitState();
    },
    componentWillReceiveProps:function(nextProps){
        this.setState({
            data: nextProps.data
        });
    },
    render: function () {
        var self = this, styles = this.getStyles()
        //<a href="#"><img src="./img/banner.png"></a>
        return (
            <div
                className="judge_one_wrapper homepage-wrapper"
                style={styles.homepageWrapper}>
                <div className="banner">
                    <a href="">
                        <img src="../../../../../../../../tpl/judge_one/img/banner.png"/>
                    </a>
                </div>
                <p
                    className="home-title editing"
                    style={styles.homeTitle}
                    onClick={this._onEdit.bind(null,"homeTitle")}>
                    {this.state.data.homeTitle.content}
                </p>
                <p
                    className="home-des editing"
                    style={styles.homeDes}
                    onClick={this._onEdit.bind(null,"homeDes")}>
                    {this.state.data.homeDes.content}
                </p>
                <button
                    className="editing"
                    style={styles.go}
                    onClick={this._onEdit.bind(null,"go")}>
                    {this.state.data.go.content}
                </button>
            </div>
        );
    },
    _onEdit:function(_tip){
        //var _tip = $(e.target).data("tip");
        EidtingItemTipDATA.set(_tip);
    }
});

module.exports = Template;