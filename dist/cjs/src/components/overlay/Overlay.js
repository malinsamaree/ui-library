'use strict';

var index = require('../../../node_modules/react/index.js');
var style_module = require('./style.module.scss.js');

var Overlay = function Overlay() {
  return /*#__PURE__*/index.createElement("div", {
    className: style_module["overlay-wrapper"]
  }, "overlay", /*#__PURE__*/index.createElement("div", {
    className: "bullet-wrapper"
  }, "aa"));
};

exports.Overlay = Overlay;
