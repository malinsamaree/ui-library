'use strict';

var index = require('../../../node_modules/react/index.js');
var types = require('./types.js');
var style = require('./style.js');
var Test = require('../test/Test.js');

var Chip = function Chip(_ref) {
  var children = _ref.children,
    _ref$chipType = _ref.chipType,
    chipType = _ref$chipType === void 0 ? types.ChipType.DEFAULT : _ref$chipType,
    error = _ref.error,
    active = _ref.active,
    testProp = _ref.testProp;
  return /*#__PURE__*/index.createElement(style.ChipWrapper, {
    error: error,
    active: active,
    chipType: chipType
  }, children && children, testProp && /*#__PURE__*/index.createElement(Test.Test, {
    testProp: testProp
  }, "malin"));
};

exports.Chip = Chip;
