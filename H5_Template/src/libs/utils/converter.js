var date = require('../../../reactLibs/utils/date');
var _isEqual = require('lodash/lang/isEqual');
var _findIndex = require('lodash/array/findIndex');
var _uniq = require('lodash/array/uniq');
var _indexBy = require('lodash/collection/indexBy');
var imgSrcHandler = require('./_imgSrcHandler');
function _makeDetailPicHtml(data, imgSrc) {
  return '<div class="detail-pic-w util-lazyload" data-width="' + (data.width) + '" data-height="' + (data.height) + '" data-id="' + data.id + '" data-imgSrc="' + imgSrc + '"><img class="detail-pic" src="'+imgSrc+'"/></div>';
}
var imgPlaceHolderReg = /[\n ]*<dolphinimagestart--([\w\-]+)--dolphinimageend>[\n ]*/ig;
var imgElmReg = /(<img)([^>]+)(>)/ig;
//don't show the same image twice


function makeHtml(data) {
  var picList = _uniq(data.nimg, function(img){return img.id;}),
    picsMap = _indexBy(picList, 'id'),
    textHtml = data.ncnt,
    pics = [],
    imgPlaceholderHandler = function(m, id) {
      /*jshint unused:false*/
      var imgSrc, pic = picsMap[id];
      if (pic == null) {
        return '';
      }
      imgSrc = imgSrcHandler.convert(pic.src);
      pic = {
        id: pic.id,
        height: pic.height || 0,
        width: pic.width || 0,
        src: imgSrc + ''
      };
      if (_findIndex(pics, function(pitem){
        return pitem.id == pic.id;
      }) === -1) {
        pics.push(pic);
        return _makeDetailPicHtml(pic, imgSrc);
      } else {
        return '';
      }
    },
    imgElmHandler = function(m, prefix, attrStr, sufix) {
      if (/(height="1")|(width="1")/i.test(m)) return '';
      return '<div class="detail-pic-wrapper">' + prefix + ' class="detail-img" ' + attrStr + sufix + '</div>';
    };

  textHtml = textHtml.replace(imgElmReg, imgElmHandler).replace(imgPlaceHolderReg, imgPlaceholderHandler);
  textHtml = textHtml.replace(/\n/g, '<br>');
  return {
    htmlContent: textHtml,
    pics: pics
  };
}

function makeGallaryContent(data) {
  var picList = data.nimg,
    picListLen = picList.length,
    images = [],
    imgSrc;
  if (picListLen > 0) {
    for (var i = 0; i < picListLen; i++) {
      imgSrc = imgSrcHandler.convert(picList[i].src);
      images.push({
        src: imgSrc,
        title: picList[i].title,
        description: picList[i].description
      });
    }
  }
  return images;
}

function detailConverter(data) {
  var gallaryTypes = [5, 9];
  return {
    id: data.wid,
    cid: data.cat,
    type: data.type,
    header: {
      title: data.ntt,
      source: data.anm,
      pubDate: date.format(new Date(data.pub), "MM-dd hh:mm")
    },
    content: (_findIndex(gallaryTypes,data.type,function(gt){return gt == data.type;}) !== -1 ? makeGallaryContent(data) : makeHtml(data)),
    lnk: data.lnk
  };
}

module.exports = detailConverter;