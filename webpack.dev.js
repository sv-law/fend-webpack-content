const path = require('path')
const webpack = require('webpack')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        // CleanWebpackPlugin rebuilds the `dist` folder contents
        // without having the user delete the folder manually or 
        // increasing the length of the command used via CLI.
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        // HtmlWebpackPlugin allows one to /generate/ an HTML file, 
        // that has JS and so forth in it added dynamically; no need 
        // to manually add all the separate JS files.
        // Result in `dist/index.html`
        //<script type="text/javascript" src="main.js"></script></body>
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}
