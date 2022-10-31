'use strict';

var index = require('../../../node_modules/react/index.js');
var style_module = require('./style.module.css.js');

var Bullet = function Bullet() {
  return /*#__PURE__*/index.createElement("div", {
    className: style_module["bullet-wrapper"]
  });
};

exports.Bullet = Bullet;
