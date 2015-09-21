var url = require('url');
function convert(orgUrl){
  // var urlObj = url.parse(orgUrl);
  // return '/image'+urlObj.path;
  return orgUrl;
}
module.exports = {
  convert: convert
};