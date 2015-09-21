var React = require('react');
var Router = require('react-router');

var tplCreateDATA = require('../../../../../../utils/AppDataUtils').select("tpl_create");
var TemplateListDATA = tplCreateDATA.select("templateList");
var TemplateActiveIndexDATA = tplCreateDATA.select("templateActiveIndex");

function getInitState() {
    var _templateList = TemplateListDATA.get();
    return {
        templateList:_templateList
    };
}

var tplFirstLevel = React.createClass({
    displayName: "tplFirstLevel",
    mixins: [Router.State],
    getInitialState: function() {
        var _getInitState = getInitState.bind(this);
        return _getInitState();
    },
    render: function () {
        return (
            <ul className="set-bar-list cf">
                {this.state.templateList.map(function(item, i) {
                    var boundClick = this.handleClick.bind(this,item, i);
                    return (
                        <li onClick={boundClick} key={i} ref={'item' + i}>
                            <a>
                                <img src={item.collectionTitleImgUrl} />
                                <span></span>
                            </a>
                            <p>{item.collectionTitle}</p>
                        </li>
                    );
                }, this)}
            </ul>
        );
    },
    handleClick:function(item, i){
        var self = this;
        TemplateActiveIndexDATA.set(i);
        setTimeout(function(){
            self.context.router.transitionTo("tpl_create_template_secondlevel");
        },100)
    }
});

module.exports = tplFirstLevel;