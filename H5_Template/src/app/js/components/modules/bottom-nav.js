var React = require('react'),
    Router = require('react-router'),
    mui = require('material-ui');

var BottomNav = require('../../ui/BottomNav');

var appConfig = require('../../utils/AppDataUtils').select("appConfig");
var homeDATA = require('../../utils/AppDataUtils').select("home");
var tp = require('../../../../libs/utils/translate').onTranslatepage;

function getBottomNav() {
    return {
        countries:appConfig.get('countries'),
        pages:appConfig.get('pages'),
        menuItems:[],
        selectedIndex:null
    };
}

var AppBottomNav = React.createClass({
    displayName: "AppBottomNav",
    mixins: [ Router.Navigation, Router.State],
    getInitialState: function () {
        return getBottomNav();
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
                bottom
            </div>
        );
        return (
            <BottomNav
                ref="bottomNav"
                openBottom={true}
                heightPercentage={0.5}
                docked={false}
                isInitiallyOpen={false}
                header= {header}
                menuItems={this.state.menuItems}
                selectedIndex={this._getSelectedIndex()}
                onChange={this._onBottomNavChange}
            >
            </BottomNav>
        );
    },

    _toggle: function () {
        this.refs.bottomNav.toggle();
    },

    _getSelectedIndex: function () {
        var currentItem;

        for (var i = this.state.menuItems.length - 1; i >= 0; i--) {
            currentItem = this.state.menuItems[i];
            if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
        }
    },

    _onBottomNavChange: function (e, selectedIndex, menuItem) {
        homeDATA.set('title', menuItem.text);
        //路由跳转
        this.context.router.transitionTo(menuItem.route);
    },

    _onHeaderClick: function () {
        this.context.router.transitionTo('root');
        this.refs.bottomNav.close();
    }

});

module.exports = AppBottomNav;
