var React = require('react'),
    IScroll = require('iscroll');

var appConfig = require('../../utils/AppDataUtils').select("appConfig");
var homeDATA = require('../../utils/AppDataUtils').select("home");

function getLeftNav() {
    return {
        navItems:[]
    };
}

var ScrollNav = React.createClass({
    displayName: "ScrollNav",
    getInitialState: function () {
        return getLeftNav();
    },
    componentDidMount: function() {
        var myScroll = new IScroll('#scrollNavWrapper', {
            eventPassthrough: true,
            scrollX: true,
            scrollY: false,
            preventDefault: false
        });
    },
    render: function () {
        var self = this;
        return (
            <div id="scrollNavWrapper">
                <div id="scroller">
                    <ul>
                        {this.props.items.map(function(item, i) {
                            var boundClick = this._onHeaderClick.bind(this, item, i);
                            return (
                                <li onClick={boundClick} key={i} title={item} ref={'item' + i} >
                                    {item.text}
                                </li>
                            );
                        }, this)}
                    </ul>
                </div>
            </div>
        );
    },
    _onHeaderClick:function(item, i){
        console.log(item)
    }

});

module.exports = ScrollNav;
