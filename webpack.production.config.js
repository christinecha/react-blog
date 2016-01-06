var webpack = require('webpack');

module.exports = {
    entry:( __dirname, '/src/app.js'),
    output: {
        path: (__dirname, 'dist'),
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
