const webpack = require('webpack'); //commonJS module system; webpack installed --> node_modules folder
const path = require('path'); // pre-defined module in nodejs
module.exports = function (__env, argv) {
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js"
        },
        // target: ['web', 'es3'],
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: "babel-loader"
                }
            ]
        }
    }
}