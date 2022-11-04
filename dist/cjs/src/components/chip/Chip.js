'use strict';

var index = require('../../../node_modules/react/index.js');
var types = require('./types.js');
var style = require('./style.js');

var Chip = function Chip(_ref) {
  var children = _ref.children,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? types.ChipType.DEFAULT : _ref$type,
    error = _ref.error,
    active = _ref.active;
  return /*#__PURE__*/index.createElement(style.ChipWrapper, {
    error: error,
    active: active,
    type: type
  }, children);
};

exports.Chip = Chip;
