'use strict';

var index = require('../../../node_modules/react/index.js');
var style = require('./style.css.js');

var Spinner = function Spinner() {
  return /*#__PURE__*/index.createElement("div", {
    className: style["spinner-wrapper"]
  }, "SPINNER");
};

exports.Spinner = Spinner;
