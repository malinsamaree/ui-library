'use strict';

var index = require('../../../node_modules/react/index.js');
var types = require('./types.js');
var Test = require('../test/Test.js');

var Chip = function Chip(_ref) {
  var children = _ref.children,
    _ref$chipType = _ref.chipType;
    _ref$chipType === void 0 ? types.ChipType.DEFAULT : _ref$chipType;
    _ref.error;
    _ref.active;
    var testProp = _ref.testProp;
  return /*#__PURE__*/index.createElement("div", null, children && children, testProp && /*#__PURE__*/index.createElement(Test.Test, {
    testProp: testProp
  }, "malin"));
};

exports.Chip = Chip;
