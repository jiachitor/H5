var React = require('react');
var Router = require('react-router');       /*路由*/
var localStorage = require('store2');

var LoginActions = require('../../actions/LoginActions');
var LoginStore = require('../../stores/LoginStore.js');

var mui = require('material-ui');
var TextField = mui.TextField;
var Paper = mui.Paper;
var DropDownMenu = mui.DropDownMenu;
var FlatButton = mui.FlatButton;
var RaisedButton = mui.RaisedButton;

var appConfig = require('../../utils/AppDataUtils').select("appConfig");
var tc = require('../../../../libs/utils/translate').onTranslateCountry;

var ENTER_KEY_CODE = 13;  //回车键

function getStateFromStores() {
    return {
        test: LoginStore.test()
    };
}

function getLoginStore() {
    return {
        country:'',
        name:'',
        password:'',
        errorText: 'This field is required..',
        error2Text: 'This field must be numeric.',
        floatingErrorText: 'This field is required.',
        floatingError2Text: 'This field must be numeric.',
        propValue: 'Prop Value',
        floatingPropValue: 'Prop Value',
        valueLinkValue: 'Value Link',
        floatingValueLinkValue: 'Value Link',
        loginLabel:'Login'
    };
}

var Login = React.createClass({
    displayName: "Login",
    mixins: [Router.State],
    //http://facebook.github.io/react/docs/reusable-components.html
    propTypes: {
        country: React.PropTypes.string.isRequired,  //定义一个变量，并规定其数据类型。该变量用于组件私有
        name: React.PropTypes.string.isRequired,  //定义一个变量，并规定其数据类型。该变量用于组件私有
        password: React.PropTypes.string.isRequired  //定义一个变量，并规定其数据类型。该变量用于组件私有
    },
    getStyles:function() {
        return {
            dropDownMenu:{
                height: '46px'
            },
            textField: {
                display: 'block',
                width: '100%'
            },
            raisedButton:{
                marginTop:'20px'
            }
        };
    },
    getDefaultProps: function() {
        var self = this ,menuItems = [{ payload: 0, text: 'choose countries' }];
        appConfig.get('countries').map(function(country,index){
            var countryObj = {
                payload: country, text: tc(country)
            };
            menuItems.push(countryObj);
        });
        return {
            menuItems: menuItems
        };
    },
    getInitialState: function() {
        return getLoginStore();
    },
    componentDidMount: function() {
        LoginStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        LoginStore.removeChangeListener(this._onChange);
    },
    render: function () {
        var test_demo = this.state.test;
        var styles = this.getStyles();

        return (
            <div className="login">
                <Paper zDepth={2} circle={false} className="login-box">
                    <h1> Dolphin News </h1>
                    <div className="login-from">
                        <DropDownMenu menuItems={this.props.menuItems} onChange={this._onChangeCountries} selectedIndex={1} autoWidth={true} style={styles.dropDownMenu}/>
                        <TextField
                            ref="nameText"
                            hintText="name"
                            type="text"
                            style={styles.textField}
                            multiLine={false}
                            onChange={this._onChangeName}
                            onKeyDown={this._onKeyDownName}
                        />
                        <TextField
                            ref="passwordText"
                            hintText="password"
                            type="password"
                            style={styles.textField}
                            multiLine={false}
                            onChange={this._onChangePassword}
                            onKeyDown={this._onKeyDownPassword}
                        />
                        <RaisedButton ref="loginBtn" label={this.state.loginLabel} onClick={this._onLogin} style={styles.raisedButton}/>
                        <p>Welcome To Operation Console</p>
                    </div>

                </Paper>
            </div>
        );
    },
    _onChange: function() {
        //this.setState(getStateFromStores());
        this.context.router.transitionTo('home');
        //window.location.reload();
    },
    _onChangeCountries:function(event, selectedIndex, menuItem){
        appConfig.set("locale",menuItem.payload);
    },
    _onChangeName: function(event) {
        this.setState({
            name: event.target.value
        });
    },
    _onKeyDownName: function(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            this._onLogin();
            //this.setState({name: ''});
        }
    },
    _onChangePassword: function(event) {
        this.setState({
            password: event.target.value
        });
    },
    _onKeyDownPassword: function(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            this._onLogin();
            //this.setState({password: ''});
        }
    },
    _checkText:function(text){
        return LoginActions.check(text);
    },
    _onMenuIconButtonTouchTap: function () {

    },
    _onLogin:function(){
        this.refs.nameText.setErrorText("");
        this.refs.passwordText.setErrorText("");

        var btn = this.refs.loginBtn.getDOMNode();
        //从当前 String 对象移除所有前导空白字符和尾部空白字符
        var name = this.state.name.trim();
        var password = this.state.password.trim();
        //判断是否为空
        if (name && password) {
            this.refs.nameText.setErrorText("");
            this.refs.passwordText.setErrorText("");
            var _name = this._checkText(name);
            var _password = this._checkText(password);
            //判断传值是否合法
            if(!_name){
                this.refs.nameText.setErrorText("Please enter right name");
            }else if(!_password){
                this.refs.passwordText.setErrorText("Please enter right password");
            } else if(_name && _password){
                this.setState({
                    loginLabel: "Logining ...."
                });
                $(btn).attr("disabled",true);
                LoginActions.login(name,password);
            }
        }else if(!name){
            this.refs.nameText.setErrorText("Please enter your name");
        }else if(!password){
            this.refs.passwordText.setErrorText("Please enter your password");
        }

    },


});

module.exports = Login;