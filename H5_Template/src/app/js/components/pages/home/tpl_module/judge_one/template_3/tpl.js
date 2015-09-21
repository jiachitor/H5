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
            gameover:{
                "color":this.state.data.gameover.style.color,
                "fontSize":this.state.data.gameover.style.fontSize
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
        var self = this, styles = this.getStyles()
           //<a href="#"><img src="./img/banner.png"></a>
        return (
            <div className="judge_one_wrapper last-wrapper">
                <div className="banner">
                    <a href="">
                        <img src="../../../../../../../../tpl/judge_one/img/banner.png" />
                    </a>
                </div>
                <p
                    className="gameover editing"
                    style={styles.gameover}
                    onClick={this._onEdit.bind(null,"gameover")}>
                    {this.state.data.gameover.content}
                </p>
                <p
                    className="rank-text editing"
                    onClick={this._onEdit.bind(null,"rank")}>
                    {this.state.data.rank.content}
                </p>
                <ul className="result-show">
                    <li></li><li></li><li></li><li></li><li></li>
                </ul>
                <p
                    className="result-text editing"
                    onClick={this._onEdit.bind(null,"success")}>
                    {this.state.data.success.content}
                </p>
                <button
                    className="editing"
                    onClick={this._onEdit.bind(null,"tryAgain")}>
                    {this.state.data.tryAgain.content}
                </button>
                <p
                    className="share-text editing"
                    onClick={this._onEdit.bind(null,"share")}>
                    --{this.state.data.share.content}--
                </p>
                <div className="share-icon">
                    <a id="share-icon-facebook"><img src="../../../../../../../../tpl/judge_one/img/icon_share_facebook.png" /></a>
                    <a id="share-icon-twitter"><img src="../../../../../../../../tpl/judge_one/img/icon_share_twitter.png" /></a>
                    <a id="share-icon-email"><img src="../../../../../../../../tpl/judge_one/img/icon_share_email.png" /></a>
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