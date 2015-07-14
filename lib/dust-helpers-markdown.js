var markdown = require('markdown');

module.exports = function (dust) {
  dust.helpers.markdown = function(chunk, context, bodies, params) {
    if (bodies.block) {
      return chunk.capture(bodies.block, context, function(string, chunk) {
        chunk.end(markdown.parse(string));
      });
    }
    return chunk;
  };
};

module.exports.registerWith = module.exports;
