var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var extract_css = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)?$/i,
                use: [
                    'url-loader?limit=10000',
                    "img-loader"
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    extract_css.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed"
                            }
                        }
                    },
                ] 
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'}),
        new extract_css({
            filename: "site.compressed.css",
            chunkFilename: '[id].css',
            publicPath: path.resolve(__dirname, '/dist/')
        })
    ]
};