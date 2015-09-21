var React = require('react'),
    moment = require('moment'),
    mui = require('material-ui');

var DatePicker = mui.DatePicker;
var TimePicker = mui.TimePicker;

function getInitState() {
    var timeStamp = this.props.timeStamp;
    var date = moment(timeStamp*1000).format('YYYY-MM-DD');
    var time = moment(timeStamp*1000).format('HH:mm:ss');
    return {
        timeStamp:timeStamp,
        date:date,
        time:time,
        dateAndTime:timeStamp
    };
}

var DateTimePicker = React.createClass({
    displayName: "DateTimePicker",
    getDefaultProps: function() {

        var standardActions = [];
        return {
            timeStamp:standardActions
        };
    },
    getInitialState: function() {
        var _getInitState = getInitState.bind(this);
        return _getInitState();
    },
    componentDidMount: function() {

    },
    render: function () {
        return (
            <div
                onChange={this._onChange}
                onGetTime={this._onGetTime}
            >
                <DatePicker
                    autoOk={this.props.autoOk}
                    hintText={this.state.date}
                    onChange={this._onDataChange}
                    ref='datePicker'/>
                <TimePicker
                    format="24hr"
                    hintText={this.state.time}
                    onChange={this._onTimeChange}
                    ref='timePicker'/>
            </div>
        );
    },
    _onChange:function(){
        var self = this;
        setTimeout(function(){
            var _date = self.refs.datePicker.getDate();
            var _time = self.refs.timePicker.getTime();
            var time =moment(_date).format('YYYY-MM-DD')+' '+moment(_time).format('HH:mm:ss');
            var timeUnix = moment(time).format('X');
            self.setState({
                dateAndTime: timeUnix
            });
            self.props.onChange();
        },1000)
    },
    _onGetTime:function(){
        return this.state.dateAndTime;
    },
    _onDataChange:function(){
        this._onChange();
    },
    _onTimeChange:function(){
        this._onChange();
    }

});

module.exports = DateTimePicker;
