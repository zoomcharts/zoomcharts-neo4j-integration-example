const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './build/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: "css-loader"
                })
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            {
                from: './node_modules/@dvsl/zoomcharts/lib/assets',
                to: 'assets'
            }
        ])
    ],

    externals: {
        fs: '{}',
        tls: '{}',
        net: '{}',
        dns: '{}',
        readline: '{}'
    },

    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 10002
    }
}
