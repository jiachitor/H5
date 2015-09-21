var React = require('react');
console.log(React)
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var mui = require('material-ui');
var Colors = mui.Styles.Colors;
var ThemeManager = new mui.Styles.ThemeManager();
var AppCanvas = mui.AppCanvas;

var IndexUtils = require('../utils/IndexUtils.js');
var appConfig = require('../utils/AppDataUtils').select("appConfig");

function getStateFromStores() {
    var loginInfo = IndexUtils.whetherLogin();
    return {
        logged : loginInfo.whether,
        config : loginInfo.config
    };
}

var Index = React.createClass({
    displayName: "Index",
    mixins: [Router.State],
    getChildContext:function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        }
    },
    getStyles:function() {
        var darkWhite = Colors.darkWhite;
        return {
            appCanvas: {
                width: '100%',
                height: '100%',
                position: 'relative'
            }
        };
    },
    //定义初始的 prop 值
    getDefaultProps: function() {
        return {
            value: 'default value 22'
        };
    },
    //在组件被挂载之前调用。状态化的组件应该实现这个方法，返回初始的state数据。
    getInitialState:function(){
        return getStateFromStores();
    },
    //在组件挂载发生之前立即被调用
    componentWillMount:function(){
        if(this.state.logged){
            this.context.router.transitionTo('tpl_create');
            appConfig.set("localStorageConfig",this.state.config);
            var locale = this.state.config.curLocale;
            appConfig.set("locale",locale);
        }else{
            this.context.router.transitionTo('login');
        }
        //this.forceUpdate();
        //注意使用 forceUpdate 之后，就直接执行 render() 了
    },
    //在组件挂载结束之后马上被调用。需要DOM节点的初始化操作应该放在这里。
    componentDidMount: function() {
        //IndexStore.addChangeListener(this._onChange);
        //window.addEventListener('resize', this.handleResize);
    },
    //当一个挂载的组件接收到新的props的时候被调用。该方法应该用于比较this.props和nextProps，然后使用this.setState()来改变state。
    componentWillReceiveProps:function(nextProps){
        //IndexStore.removeChangeListener(this._onChange);
        //window.removeEventListener('resize', this.handleResize);
    },
    //boolean当组件做出是否要更新DOM的决定的时候被调用。实现该函数，优化this.props和nextProps，以及this.state和nextState的比较，如果不需要React更新DOM，则返回false。
    shouldComponentUpdate:function( nextProps, nextState){
        return true;
    },
    //在更新发生之前被调用。你可以在这里调用this.setState()。
    componentWillUpdate:function(nextProps, nextState){

    },
    //在更新发生之后调用
    componentDidUpdate:function(nextProps, nextState){

    },
    //在组件移除和销毁之前被调用。清理工作应该放在这里。
    componentWillUnmount:function(){

    },
    render: function () {
        var styles = this.getStyles();
        //var title =
        //    this.context.router.isActive('get-started') ? 'Get Started' :
        //        this.context.router.isActive('customization') ? 'Customization' :
        //            this.context.router.isActive('components') ? 'Components' : '';
        return (
            <AppCanvas predefinedLayout={1} className="app" palette={true} style={styles.appCanvas}>
                <RouteHandler key={name} appInitConfig={this.state.config}/>
            </AppCanvas>
        );
    },
    _onChange: function() {

    }

});

Index.childContextTypes = {
    muiTheme: React.PropTypes.object
};

module.exports = Index;