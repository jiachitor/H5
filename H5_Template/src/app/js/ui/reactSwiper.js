var React = require('react'),
    swiper = require('swiper');


function constrain (snap) {
    function constrainOffset (offset, prev) {
        var delta = offset - prev;
        if (Math.abs(delta) >= snap) {
            return prev + parseInt(delta / snap, 10) * snap;
        }
        return prev;
    }
    return function (pos) {
        return {
            top: constrainOffset(pos.top, pos.prevTop),
            left: constrainOffset(pos.left, pos.prevLeft)
        };
    };
}

//helpers
function _pick(o, keys){
    if(!o || !keys || !keys.length) return null;
    var result = {};
    keys.forEach(function(key){
        var val = o[key];
        if(val !== undefined){
            result[key] = val;
        }
    });
    return result;
}

function getInitState() {

    return {
        focused: false,
        active: false,
        hovered: false
    };
}

var ReactSeiper = React.createClass({
    displayName: "ReactSeiper",
    getStyles:function() {
        return {
            slideNav:{
                width:'100%',
                position:'relative',
                overflow:'hidden'
            },
            slideNavBtns:{
                display:'inline-block',
                width:this.props.items.length * this.props.itemWidth
            }
        };
    },
    getDefaultProps: function() {
        return {
            containerClassName: 'swiper-container'
        };
    },
    getInitialState: function() {
        var _getInitState = getInitState.bind(this);
        return _getInitState();
    },
    componentDidMount: function() {
        var initPage = this.props.initPage || 0;
        console.log(2)

        this.swiper = new swiper(React.findDOMNode(this.refs.reactSwiper),this.props.parameters);

        // Later add callback
        this.swiper.on('slideChangeStart', function () {
            console.log('slide change start');
        });


        this.swiper.once('sliderMove', function () {
            console.log('slider moved');
        });
    },
    componentWillUnmount: function(){
        this.swiper.destroy();
    },
    render: function () {
        var styles = this.getStyles();
        var slide, swiper_pagination, wiper_button_prev, swiper_button_next, swiper_scrollbar;

        slide = (
            <div className="swiper-wrapper">
                {this.props.items.map(function(item, i) {
                    var boundClick = this._handleClick.bind(this, item, i);
                    return (
                        <div className="swiper-slide" key={i} ref={'item' + i} onClick={boundClick}>
                            {item}
                        </div>
                    );
                }, this)}
            </div>
        );

        swiper_pagination = this.props.swiper_pagination ? (<div className="swiper-pagination"></div>) : null;
        wiper_button_prev = this.props.wiper_button_prev ? (<div className="swiper-button-prev"></div>) : null;
        swiper_button_next = this.props.swiper_button_next ? (<div className="swiper-button-next"></div>) : null;
        swiper_scrollbar = this.props.swiper_scrollbar ? (<div className="swiper-scrollbar"></div>) : null;

        return (
            <div className={this.props.containerClassName} ref="reactSwiper" mySwiper={this.swiper}>
                {slide}
                {swiper_pagination}
                {wiper_button_prev}
                {swiper_button_next}
                {swiper_scrollbar}
            </div>
        );
    },
    _handleClick:function(){

    }

});

module.exports = ReactSeiper;
