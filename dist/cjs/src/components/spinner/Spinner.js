'use strict';

var index = require('../../../node_modules/react/index.js');
var style_module = require('./style.module.css.js');

var Spinner = function Spinner() {
  return /*#__PURE__*/index.createElement("div", {
    className: style_module["spinner-wrapper"]
  }, "SPINNER");
};

exports.Spinner = Spinner;
