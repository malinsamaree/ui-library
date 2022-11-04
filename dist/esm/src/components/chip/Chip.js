import React from '../../../node_modules/react/index.js';
import { ChipType } from './types.js';
import { ChipWrapper } from './style.js';

var Chip = function Chip(_ref) {
  var children = _ref.children,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? ChipType.DEFAULT : _ref$type,
    error = _ref.error,
    active = _ref.active;
  return /*#__PURE__*/React.createElement(ChipWrapper, {
    error: error,
    active: active,
    type: type
  }, children);
};

export { Chip };
