const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'aetal', 'index.tsx'),
    output: {
        path: path.join(__dirname, 'aetal', 'dist'),
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
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "@teamsupercell/typings-for-css-modules-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'aetal', 'index.html'),
            favicon: path.resolve('./aetal/favicon.ico')
        }),
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
}
