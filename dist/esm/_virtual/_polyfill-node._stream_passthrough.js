import Transform from './_polyfill-node._stream_transform.js';
import './_polyfill-node.util.js';
import inherits from './_polyfill-node._inherits.js';

inherits(PassThrough, Transform);
function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

export { PassThrough, PassThrough as default };
