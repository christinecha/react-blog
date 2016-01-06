var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, '/src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
    module: {
        loaders: [{
          test: /\.js$/,

          // There is not need to run the loader through
          // vendors
          exclude: /node_modules/,
          loader: 'babel-loader'
        }]
      }
    };

};
