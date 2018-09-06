const {resolve} = require('path');
const webpack = require('webpack');

const PACKAGE_ROOT = resolve(__dirname, '.');
const ROOT = resolve(PACKAGE_ROOT, '../..');
// This is used to define the __VERSION__ constant in core/lib/init.js
// babel-plugin-version-inline uses the package version from the working directory
// Therefore we need to manually import the correct version from the core
// This is called in prepublishOnly, after lerna bumps the package versions
const CORE_VERSION = require(resolve(ROOT, 'node_modules/luma.gl/package.json')).version;

const config = {
  resolve: {
    alias: {
      'luma.gl': resolve(ROOT, 'node_modules/luma.gl/src')
    }
  },

  module: {
    rules: [
      {
        // Disable tree shaking
        test: () => true,
        sideEffects: true
      },
      {
        // Compile ES2015 using babel
        test: /\.js$/,
        loader: 'babel-loader',
        include: /src/
      }
    ]
  }
};

const devConfig = Object.assign({}, config, {
  entry: resolve(PACKAGE_ROOT, 'test/index.js'),

  mode: 'development',

  output: {
    libraryTarget: 'umd',
    path: resolve(PACKAGE_ROOT, 'dist'),
    filename: 'lumagl.js'
  },

  devServer: {
    contentBase: resolve(PACKAGE_ROOT, 'test')
  }
});

const prodConfig = Object.assign({}, config, {
  entry: resolve(PACKAGE_ROOT, 'src/index.js'),

  mode: 'production',

  output: {
    libraryTarget: 'umd',
    path: resolve(PACKAGE_ROOT, 'dist'),
    filename: 'lumagl.min.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(CORE_VERSION)
    })
  ],

  devtool: ''
});

module.exports = env => (env ? devConfig : prodConfig);
