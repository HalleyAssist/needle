var stream = require('stream')

module.exports = function(charset) {
  return new stream.PassThrough;
}
