require('source-map-support').install();
require('babel-core/register');
require('babel-polyfill');

// require('./webgl-independent');
require('./webgl');
// require('./node-dependent');

require('./core');
