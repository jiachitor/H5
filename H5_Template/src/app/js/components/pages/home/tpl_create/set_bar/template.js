var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var SetBarTPL = React.createClass({
    displayName: "SetBarTPL",
    render: function () {
        return (
            <div>
                <RouteHandler key={name}/>
            </div>
        );
    }
});

module.exports = SetBarTPL;