var React = require('react'),
    Router = require('react-router'),
    mui = require('material-ui');

var LeftNav = mui.LeftNav;

var appConfig = require('../../utils/AppDataUtils').select("appConfig");
var homeDATA = require('../../utils/AppDataUtils').select("home");
var tp = require('../../../../libs/utils/translate').onTranslatepage;

function getLeftNav() {
    return {
        countries:appConfig.get('countries'),
        pages:appConfig.get('pages'),
        menuItems:[],
        selectedIndex:null
    };
}

var AppLeftNav = React.createClass({
    displayName: "AppLeftNav",
    mixins: [ Router.Navigation, Router.State],
    getInitialState: function () {
        return getLeftNav();
    },
    render: function () {
        var self = this;
        if(this.state.menuItems.length == 0){
            this.state.pages.map(function(page,index){
                var nav = {
                    route: page, text: tp(page)
                };
                self.state.menuItems.push(nav);
            });
        }

        var header = (
            <div
                className= "logo"
                onClick= {this._onHeaderClick} >
                H5 Template
            </div>
        );
        return (
            <LeftNav
                ref="leftNav"
                docked={false}
                isInitiallyOpen={false}
                header= {header}
                menuItems={this.state.menuItems}
                selectedIndex={this._getSelectedIndex()}
                onChange={this._onLeftNavChange}
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

    _onLeftNavChange: function (e, selectedIndex, menuItem) {
        homeDATA.set('title', menuItem.text);
        //路由跳转
        this.context.router.transitionTo(menuItem.route);
    },

    _onHeaderClick: function () {
        this.context.router.transitionTo('root');
        this.refs.leftNav.close();
    }

});

module.exports = AppLeftNav;
