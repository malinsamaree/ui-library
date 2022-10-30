'use strict';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

exports.taggedTemplateLiteral = _taggedTemplateLiteral;
//# sourceMappingURL=_rollupPluginBabelHelpers.js.map
