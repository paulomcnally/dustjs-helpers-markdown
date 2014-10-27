var markdown = require('markdown');

(function(dust) {
  dust.helpers.markdown = function(chunk, context, bodies, params) {
    if (bodies.block) {
      return chunk.capture(bodies.block, context, function(string, chunk) {
        chunk.end(markdown.parse(string));
      });
    }
    return chunk;
  };
}(typeof exports !== 'undefined' ? module.exports = require('dustjs-linkedin') : dust));
