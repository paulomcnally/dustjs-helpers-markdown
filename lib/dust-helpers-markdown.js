var showdown  = require('showdown');
var converter = new showdown.Converter({extensions: [
  'youtube'
]});

converter.setOption('simplifiedAutoLink', true);
converter.setOption('parseImgDimensions', true);
converter.setOption('excludeTrailingPunctuationFromURLs', true);
converter.setOption('literalMidWordUnderscores', true);
converter.setOption('tables', true);
converter.setOption('tasklists', true);
converter.setOption('ghCodeBlocks', true);
converter.setOption('smartIndentationFix', true);
converter.setOption('ghMentions', true);
converter.setOption('encodeEmails', true);

module.exports = function (dust) {
  dust.helpers.markdown = function(chunk, context, bodies, params) {
    if (bodies.block) {
      return chunk.capture(bodies.block, context, function(string, chunk) {
        chunk.end(converter.makeHtml(string));
      });
    }
    return chunk;
  };
};

module.exports.registerWith = module.exports;
