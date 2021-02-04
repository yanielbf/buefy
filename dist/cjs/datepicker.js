'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-14c82365.js');
require('./helpers.js');
require('./chunk-0e70abe7.js');
require('./chunk-2de136d0.js');
require('./chunk-e9c0d951.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-3ff4f874.js');
require('./chunk-bcdfb68c.js');
require('./chunk-ae7e641a.js');
require('./chunk-f2ea2a3a.js');
require('./chunk-a558102e.js');
require('./chunk-061a4167.js');
var __chunk_16 = require('./chunk-1d5e8a2e.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_16.Datepicker);
  }
};
__chunk_5.use(Plugin);

exports.BDatepicker = __chunk_16.Datepicker;
exports.default = Plugin;
