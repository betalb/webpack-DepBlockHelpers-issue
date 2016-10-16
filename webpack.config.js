const webpack = require('webpack');

module.exports = {
    entry: {
        app: __dirname + '/src/app.js',
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name].bundle.js',
    },

    resolve: {
        root: __dirname + '/src',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            async: 'async2',
            minChunks: 2,
            children: true,
        }),
    ]
};
