/* eslint-disable no-dupe-keys */
/* eslint-disable indent */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_moules/,
                use: 'babel-loader',
            },
            // {
            //     test: /\.json$/,
            //     exclude: /node_moules/,
            //     use: 'json-loader',

            // }
        ]
    }
};