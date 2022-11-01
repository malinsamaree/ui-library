import React from '../../../node_modules/react/index.js';
import style from './style.module.css.js';
import './styles.css.js';
import './sassstyles.scss.js';
import './lessstyles.less.js';

var Spinner = function Spinner() {
  return /*#__PURE__*/React.createElement("div", {
    className: style["spinner-wrapper"]
  }, "SPINNER", /*#__PURE__*/React.createElement("div", {
    className: "spinner-sub-heading"
  }, "this is a apinner"), /*#__PURE__*/React.createElement("div", {
    className: "spinner-para"
  }, "malin"), /*#__PURE__*/React.createElement("div", {
    className: "less-element"
  }, "malin"));
};

export { Spinner };
