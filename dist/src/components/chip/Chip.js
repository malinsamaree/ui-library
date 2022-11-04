import React from '../../../node_modules/react/index.js';
import { ChipType } from './types.js';

var Chip = function Chip(_ref) {
  var children = _ref.children,
    _ref$type = _ref.type;
    _ref$type === void 0 ? ChipType.DEFAULT : _ref$type;
    _ref.error;
    _ref.active;
  return /*#__PURE__*/React.createElement("div", null, children);
};

export { Chip };
