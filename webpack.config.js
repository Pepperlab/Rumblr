const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: "/",
    },
    devServer: {
        static: './dist',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
            },
        ]
    },
    resolve: {
        // note: the order of the extensions needs to stay like this for typescript to work
        extensions: ['.jsx', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};