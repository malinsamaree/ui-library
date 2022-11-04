'use strict';

var index = require('../../../node_modules/react/index.js');
var style_module = require('./style.module.scss.js');
var style = require('./style.js');

var Overlay = function Overlay() {
  return /*#__PURE__*/index.createElement(index.Fragment, null, /*#__PURE__*/index.createElement(style.OverlayHeading, null, "malin"), /*#__PURE__*/index.createElement("div", {
    className: style_module["overlay-wrapper"]
  }, "overlay", /*#__PURE__*/index.createElement("div", {
    className: "bullet-wrapper"
  }, "aa")));
};

exports.Overlay = Overlay;
