import React from '../../../node_modules/react/index.js';
import { ChipType } from './types.js';
import { ChipWrapper } from './style.js';
import { Test } from '../test/Test.js';

var Chip = function Chip(_ref) {
  var children = _ref.children,
    _ref$chipType = _ref.chipType;
    _ref$chipType === void 0 ? ChipType.DEFAULT : _ref$chipType;
    var error = _ref.error;
    _ref.active;
    var testProp = _ref.testProp;
  return /*#__PURE__*/React.createElement(ChipWrapper, {
    error: error
  }, children && children, testProp && /*#__PURE__*/React.createElement(Test, {
    testProp: testProp
  }, "malin"));
};

export { Chip };
//# sourceMappingURL=Chip.js.map
