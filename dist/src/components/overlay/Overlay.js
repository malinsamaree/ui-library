import React from '../../../node_modules/react/index.js';
import style from './style.module.scss.js';
import { OverlayHeader } from './style.js';

var Overlay = function Overlay(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OverlayHeader, {
    active: active
  }, "malin"), /*#__PURE__*/React.createElement("div", {
    className: style["overlay-wrapper"]
  }, "overlay", /*#__PURE__*/React.createElement("div", {
    className: "bullet-wrapper"
  }, "aa")));
};

export { Overlay };
