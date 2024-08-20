const webpack = require('webpack'); //commonJS module system; webpack installed --> node_modules folder
const path = require('path'); // pre-defined module in nodejs
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (__env, argv) {
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.[contenthash:8].js"
        },
        target: ['web', 'es5'],
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: "babel-loader"
                }
            ]
        },
        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname) +"/public/index.html"
        })],
    }
}