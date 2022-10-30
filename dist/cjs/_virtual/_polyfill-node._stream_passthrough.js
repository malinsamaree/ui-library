'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _polyfillNode__stream_transform = require('./_polyfill-node._stream_transform.js');
require('./_polyfill-node.util.js');
var _polyfillNode__inherits = require('./_polyfill-node._inherits.js');

_polyfillNode__inherits(PassThrough, _polyfillNode__stream_transform.default);
function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  _polyfillNode__stream_transform.default.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

exports.PassThrough = PassThrough;
exports.default = PassThrough;
