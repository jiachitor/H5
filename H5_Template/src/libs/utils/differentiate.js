//根据IP地址来设置该应用的平台，目前为 broswer 或者 topstory
var useFor, href = window.location.href;

var broswerUrl = /(now\.dolphin\.com)|(10\.2\.10\.106)|(localhost:3000)/,
    topstoryUrl = /(topstory\.io)|(172\.16\.77\.64)|(172\.18\.253\.209)/;
if(broswerUrl.test(href)){
    useFor = 'broswer';
}else if(topstoryUrl.test(href)){
    useFor = 'topstory';
}

module.exports = useFor;



