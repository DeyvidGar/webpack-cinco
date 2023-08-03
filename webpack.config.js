const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles\.css$/,
                use: [ MiniCssExtractPlugin.loader, "css-loader" ],
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    // attributes: false,
                    minimize: false,
                },
            },
        ],
    },
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets/" },
            ],
        }),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'./index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: true,
        }),
    ]
};
