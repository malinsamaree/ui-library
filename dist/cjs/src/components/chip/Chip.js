'use strict';

var index = require('../../../node_modules/react/index.js');
var types = require('./types.js');

var Chip = function Chip(_ref) {
  var children = _ref.children,
    _ref$type = _ref.type;
    _ref$type === void 0 ? types.ChipType.DEFAULT : _ref$type;
    _ref.error;
    _ref.active;
  return /*#__PURE__*/index.createElement("div", null, children);
};

exports.Chip = Chip;
