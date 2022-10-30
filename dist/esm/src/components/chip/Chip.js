import React from '../../../node_modules/react/index.js';
import { ChipType } from './types.js';
import { ChipWrapper } from './style.js';
import { Test } from '../test/Test.js';

var Chip = function Chip(_ref) {
  var children = _ref.children,
    _ref$chipType = _ref.chipType,
    chipType = _ref$chipType === void 0 ? ChipType.DEFAULT : _ref$chipType,
    error = _ref.error,
    active = _ref.active,
    testProp = _ref.testProp;
  return /*#__PURE__*/React.createElement(ChipWrapper, {
    error: error,
    active: active,
    chipType: chipType
  }, children && children, testProp && /*#__PURE__*/React.createElement(Test, {
    testProp: testProp
  }, "malin"));
};

export { Chip };
