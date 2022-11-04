'use strict';

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var styledComponents_esm = require('../../../node_modules/styled-components/dist/styled-components.esm.js');
var types = require('./types.js');

var _templateObject;
var ChipWrapper = styledComponents_esm.default.div(_templateObject || (_templateObject = _rollupPluginBabelHelpers.taggedTemplateLiteral(["\n    padding: 5px 15px;\n    display: inline-flex;\n    border-radius: 8px;\n    border: ", "\n    font-size: ", "px;\n    cursor: pointer;\n"])), function (props) {
  return "2px solid ".concat(props.error ? '#A04000' : props.active ? '#5F9EA0' : '#333333');
}, function (props) {
  return props.type === types.ChipType.CLOSE ? '12' : props.type === types.ChipType.MENU ? '24' : '16';
});

exports.ChipWrapper = ChipWrapper;
