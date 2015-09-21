var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var Index = require('./index.js');
var Login = require('./pages/login.js');

//主页
var Home = require('./pages/home.js');
var HomeList = require('./pages/home/_homeList.js');

//模板1
var TPL_Create = require('./pages/home/tpl_create.js');
var TPL_Create_Edit = require('./pages/home/tpl_create/set_bar/edit.js');
var TPL_Create_Template = require('./pages/home/tpl_create/set_bar/template.js');
var TPL_Create_Template_Firstlevel = require('./pages/home/tpl_create/set_bar/template/firstlevel.js');
var TPL_Create_Template_Secondlevel = require('./pages/home/tpl_create/set_bar/template/secondlevel.js');

//handler是指当这条路由被触发时该渲染哪个组件
var AppRoutes = (
    <Route handler={Index}>

        <Route name="login" handler={Login} path="login" />
        <Route name="home" handler={Home} path="home">
            <Route name="home_list" handler={HomeList} path="list" />
            <Route name="tpl_create" handler={TPL_Create} path="tpl_create">
                <Route name="tpl_create_edit" handler={TPL_Create_Edit} path="edit" />
                <Route name="tpl_create_template" handler={TPL_Create_Template} path="template" >
                    <Route name="tpl_create_template_firstlevel" handler={TPL_Create_Template_Firstlevel} path="firstlevel" />
                    <Route name="tpl_create_template_secondlevel" handler={TPL_Create_Template_Secondlevel} path="secondlevel" />
                    <DefaultRoute handler={TPL_Create_Template_Firstlevel}/>
                </Route>
            </Route>
            <DefaultRoute handler={HomeList}/>
        </Route>
        <DefaultRoute handler={Index}/>

    </Route>
);

module.exports = AppRoutes;
