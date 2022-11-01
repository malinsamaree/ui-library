'use strict';

var index = require('../../../node_modules/react/index.js');
var style_module = require('./style.module.css.js');
require('./styles.css.js');
require('./sassstyles.scss.js');

var Spinner = function Spinner() {
  return /*#__PURE__*/index.createElement("div", {
    className: style_module["spinner-wrapper"]
  }, "SPINNER", /*#__PURE__*/index.createElement("div", {
    className: "spinner-sub-heading"
  }, "this is a apinner"), /*#__PURE__*/index.createElement("div", {
    className: "spinner-para"
  }, "malin"));
};

exports.Spinner = Spinner;
