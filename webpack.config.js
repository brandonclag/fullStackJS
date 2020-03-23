const path = require('path');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js',
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_moules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};