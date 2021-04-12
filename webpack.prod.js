// Production mode

const path = require("path");
const common = require("./webpack.common");
const {merge} = require('webpack-merge');

const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // Removes old files and injects new ones to html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Minifies css when app is ready for production
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const glob = require('glob');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        minimizer: [
            new OptimizeCssAssetsPlugin(),// minifies css files and accidentally js files too
            new TerserPlugin(), //minifies js files again
            new HtmlWebpackPlugin({ //minifies html files, but only in production
                template: "src/template.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new ImageminPlugin({
            pngquant: {
                quality: '40-50'
            },
            externalImages: {
                context: '.',
                sources: glob.sync('src/images/**/*.{png,jpg,jpeg,gif,svg}'),
                destination: 'dist/images',
                fileName: '[name].[ext]',
                clean: true,
            }
        }),
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, //2. Extract css into files
                    "css-loader" //1. Turns css into commonjs
                ]
            },
        ]
    },
});