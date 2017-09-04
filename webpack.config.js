const path = require('path');

module.exports = {
    entry:  './src/index.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.p?css$/,
                loader: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    }
};