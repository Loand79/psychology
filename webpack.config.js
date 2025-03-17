const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    return {
        mode: env.mode,
        entry: {
            psy: path.resolve(__dirname, 'src/index.ts')
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Psychology',
                filename: "psy.html",
                template: path.resolve(__dirname, 'public/index.html')
            })
        ]
    }
}