var ReactTools = require('react-tools');
module.exports = {
  process: function(src) {
    if (/define\(.*?\{/.test(src)) {
      //Remove AMD ceremony for use without require.js or almond.js
      src = src.replace(/define\(.*?\{/, '')
        .replace(/(}\);|}\))$/,'');
    }

    return ReactTools.transform(src);
  }
};