import React from '../../../node_modules/react/index.js';
import style from './style.module.scss.js';

var Overlay = function Overlay() {
  return /*#__PURE__*/React.createElement("div", {
    className: style["overlay-wrapper"]
  }, "overlay", /*#__PURE__*/React.createElement("div", {
    className: "bullet-wrapper"
  }, "aa"));
};

export { Overlay };