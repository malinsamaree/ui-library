'use strict';

var index = require('../../../node_modules/react/index.js');
require('./style.scss.js');

var Overlay = function Overlay() {
  return /*#__PURE__*/index.createElement("div", {
    className: "overlay-wrapper"
  }, "overlay", /*#__PURE__*/index.createElement("div", {
    className: "bullet-wrapper"
  }, "aa"));
};

exports.Overlay = Overlay;
