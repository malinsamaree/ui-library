'use strict';

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var styledComponents_esm = require('../../../node_modules/styled-components/dist/styled-components.esm.js');

var _templateObject;
var ChipWrapper = styledComponents_esm.default.div(_templateObject || (_templateObject = _rollupPluginBabelHelpers.taggedTemplateLiteral(["\n    display: inline-flex;\n    border: ", ";\n    border-radius: 100px;\n    padding: 10px 20px;\n"])), function (props) {
  return "1px solid ".concat(props.$error ? 'red' : props.$active ? 'blue' : 'grey');
});

exports.ChipWrapper = ChipWrapper;
