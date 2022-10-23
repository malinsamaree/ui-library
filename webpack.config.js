const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'aathal', 'index.tsx'),
    output: {
        path: path.join(__dirname, 'aathal', 'dist'),
        filename: "index.js"
    },
    devServer: {
        port: 3003,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'aathal', 'index.html')
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
}