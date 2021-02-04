'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-14c82365.js');
require('./helpers.js');
require('./chunk-0e70abe7.js');
require('./chunk-2de136d0.js');
require('./chunk-e9c0d951.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-3ff4f874.js');
var __chunk_7 = require('./chunk-5a11e774.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_7.Autocomplete);
  }
};
__chunk_5.use(Plugin);

exports.BAutocomplete = __chunk_7.Autocomplete;
exports.default = Plugin;
