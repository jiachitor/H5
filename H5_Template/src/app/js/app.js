var React = require('react');
var Router = require('react-router');

var AppRoutes = require('./components/routes.js');
var injectTapEventPlugin = require("react-tap-event-plugin");

var mountNode = document.getElementById("react-main-mount");

window.React = React;
injectTapEventPlugin();

//这里配置初始化数据
//var tree = require('./data/store');

React.initializeTouchEvents(true); //启用触摸事件处理

Router
    // Runs the router, similiar to the Router.run method. You can think of it as an
    // initializer/constructor method.
    .create({
        routes: AppRoutes,
        //location: Router.RefreshLocation,  //这个选项需要服务器也配置相关设置
        scrollBehavior: Router.ScrollToTopBehavior
    })
    // This is our callback function, whenever the url changes it will be called again.
    // Handler: The ReactComponent class that will be rendered
    .run(function (Handler) {
        var renderApp = function () {
            React.render(<Handler />, mountNode);
        };
        renderApp();
    });


