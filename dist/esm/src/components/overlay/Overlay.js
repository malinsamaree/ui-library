import React from '../../../node_modules/react/index.js';
import style from './style.module.scss.js';
import { OverlayHeading } from './style.js';

var Overlay = function Overlay() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OverlayHeading, null, "malin"), /*#__PURE__*/React.createElement("div", {
    className: style["overlay-wrapper"]
  }, "overlay", /*#__PURE__*/React.createElement("div", {
    className: "bullet-wrapper"
  }, "aa")));
};

export { Overlay };
