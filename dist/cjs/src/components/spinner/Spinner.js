'use strict';

var index = require('../../../node_modules/react/index.js');
var style_module = require('./style.module.css.js');
require('./styles.css.js');
require('./sassstyles.scss.js');
require('./lessstyles.less.js');
var lessstylesm_module = require('./lessstylesm.module.less.js');

var Spinner = function Spinner() {
  return /*#__PURE__*/index.createElement("div", {
    className: style_module["spinner-wrapper"]
  }, "SPINNER", /*#__PURE__*/index.createElement("div", {
    className: "spinner-sub-heading"
  }, "this is a apinner"), /*#__PURE__*/index.createElement("div", {
    className: "spinner-para"
  }, "malin"), /*#__PURE__*/index.createElement("div", {
    className: "lesswrapper"
  }, "less"), /*#__PURE__*/index.createElement("div", {
    className: lessstylesm_module.seconlesswrapper
  }, "less module"), /*#__PURE__*/index.createElement("li", null, "malin"));
};

exports.Spinner = Spinner;
