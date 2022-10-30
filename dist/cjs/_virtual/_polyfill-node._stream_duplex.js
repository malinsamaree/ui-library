'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./_polyfill-node.util.js');
var _polyfillNode_process = require('./_polyfill-node.process.js');
var _polyfillNode__stream_readable = require('./_polyfill-node._stream_readable.js');
var _polyfillNode__stream_writable = require('./_polyfill-node._stream_writable.js');
var _polyfillNode__inherits = require('./_polyfill-node._inherits.js');

_polyfillNode__inherits(Duplex, _polyfillNode__stream_readable.default);

var keys = Object.keys(_polyfillNode__stream_writable.default.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = _polyfillNode__stream_writable.default.prototype[method];
}
function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  _polyfillNode__stream_readable.default.call(this, options);
  _polyfillNode__stream_writable.default.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  _polyfillNode_process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

exports.Duplex = Duplex;
exports.default = Duplex;
