'use strict';

var index = require('../../../node_modules/react/index.js');
var style_module = require('./style.module.scss.js');
var style = require('./style.js');

var Overlay = function Overlay(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/index.createElement(index.Fragment, null, /*#__PURE__*/index.createElement(style.OverlayHeader, {
    active: active
  }, "malin"), /*#__PURE__*/index.createElement("div", {
    className: style_module["overlay-wrapper"]
  }, "overlay", /*#__PURE__*/index.createElement("div", {
    className: "bullet-wrapper"
  }, "aa")));
};

exports.Overlay = Overlay;
