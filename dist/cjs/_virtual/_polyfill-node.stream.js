'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _polyfillNode_events = require('./_polyfill-node.events.js');
require('./_polyfill-node.util.js');
var _polyfillNode__stream_duplex = require('./_polyfill-node._stream_duplex.js');
var _polyfillNode__stream_readable = require('./_polyfill-node._stream_readable.js');
var _polyfillNode__stream_writable = require('./_polyfill-node._stream_writable.js');
var _polyfillNode__stream_transform = require('./_polyfill-node._stream_transform.js');
var _polyfillNode__stream_passthrough = require('./_polyfill-node._stream_passthrough.js');
var _polyfillNode__inherits = require('./_polyfill-node._inherits.js');

_polyfillNode__inherits(Stream, _polyfillNode_events.default);
Stream.Readable = _polyfillNode__stream_readable.default;
Stream.Writable = _polyfillNode__stream_writable.default;
Stream.Duplex = _polyfillNode__stream_duplex.default;
Stream.Transform = _polyfillNode__stream_transform.default;
Stream.PassThrough = _polyfillNode__stream_passthrough.default;

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;

// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  _polyfillNode_events.default.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (_polyfillNode_events.default.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

exports.Duplex = _polyfillNode__stream_duplex.default;
exports.Readable = _polyfillNode__stream_readable.default;
exports.Writable = _polyfillNode__stream_writable.default;
exports.Transform = _polyfillNode__stream_transform.default;
exports.PassThrough = _polyfillNode__stream_passthrough.default;
exports.Stream = Stream;
exports.default = Stream;
