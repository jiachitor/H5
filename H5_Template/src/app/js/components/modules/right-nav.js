var React = require('react'),
    Router = require('react-router'),
    mui = require('material-ui');

var LeftNav = mui.LeftNav;
var MenuItem = mui.MenuItem;

var LoginUtils = require('../../utils/LoginUtils');
var appConfig = require('../../utils/AppDataUtils').select("appConfig");

function getRightNav() {
    return {
        menuItems:[
            { route: 'login', text: 'Sign Out' },
            { type: MenuItem.Types.SUBHEADER, text: 'MORE OPERATION CONSOLE' },
            {
                type: MenuItem.Types.LINK,
                payload: 'http://frankfurt.topstory.io/operation/news_i18n/#',
                text: 'Topstory'
            }
        ],
        selectedIndex:null
    };
}

var AppRightNav = React.createClass({
    displayName: "AppRightNav",
    mixins: [ Router.Navigation, Router.State],
    getInitialState: function () {
        return getRightNav();
    },
    render: function () {
        var self = this;
        return (
            <LeftNav
                ref="leftNav"
                openRight={true}
                docked={false}
                isInitiallyOpen={false}
                menuItems={this.state.menuItems}
                selectedIndex={this._getSelectedIndex()}
                onChange={this._onRightNavChange}
            >
            </LeftNav>
        );
    },
    _toggle: function () {
        this.refs.leftNav.toggle();
    },
    _getSelectedIndex: function () {
        var currentItem;

        for (var i = this.state.menuItems.length - 1; i >= 0; i--) {
            currentItem = this.state.menuItems[i];
            if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
        }
    },
    _onRightNavChange: function (e, selectedIndex, menuItem) {
        LoginUtils.setLoginOut();
        //路由跳转
        this.context.router.transitionTo(menuItem.route);
    },


});

module.exports = AppRightNav;
