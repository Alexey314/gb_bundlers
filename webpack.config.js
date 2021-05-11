const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");


module.exports = {
    entry: resolve(__dirname, 'src', 'main.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        rules: [
          {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [ ['@babel/preset-env', {
                    targets: "defaults",
                    modules: false
                }]],
                plugins: ['@babel/plugin-syntax-dynamic-import', 'dynamic-import-webpack']
              }
            }
          },
          {
            test: /\.mp3$/i,
            loader: 'file-loader'
            }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: resolve(__dirname, 'index.html'),
            }
        ),
        new BundleAnalyzerPlugin()
    ],
    devtool: 'source-map'
};