import React from '../../../node_modules/react/index.js';
import style from './style.module.css.js';
import './styles.css.js';
import './sassstyles.scss.js';
import './lessstyles.less.js';
import lessstyle from './lessstylesm.module.less.js';

var Spinner = function Spinner() {
  return /*#__PURE__*/React.createElement("div", {
    className: style["spinner-wrapper"]
  }, "SPINNER", /*#__PURE__*/React.createElement("div", {
    className: "spinner-sub-heading"
  }, "this is a apinner"), /*#__PURE__*/React.createElement("div", {
    className: "spinner-para"
  }, "malin"), /*#__PURE__*/React.createElement("div", {
    className: "lesswrapper"
  }, "less"), /*#__PURE__*/React.createElement("div", {
    className: lessstyle.seconlesswrapper
  }, "less module"), /*#__PURE__*/React.createElement("li", null, "malin"));
};

export { Spinner };
