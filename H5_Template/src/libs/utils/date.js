var symbolMap = {
  'MM': function(date) {
    return date.getMonth() + 1;
  },
  'mm': function(date) {
    return date.getMinutes();
  },
  'YY': function(date) {
    return date.getFullYear();
  },
  'ss': function(date) {
    return date.getSeconds();
  },
  'hh': function(date) {
    return date.getHours();
  },
  'dd': function(date) {
    return date.getDate();
  }
};

function _makeNchar(char, n) {
  var str = [];
  while (n--) {
    str.push(char);
  }
  return str.join('');
}

function alignNumber(num, len, char) {
  num = num + '';
  if (num.length > len) {
    return num;
  } else {
    return _makeNchar(char, len - num.length) + num;
  }
}
module.exports = {
  format: function(date, fmtStr) {
    if (fmtStr) {
      return fmtStr.replace((/(MM|mm|YY|ss|hh|dd)/g), function(s) {
        return alignNumber(symbolMap[s](date), 2, '0');
      });
    } else {
      return data.toString();
    }
  }
};