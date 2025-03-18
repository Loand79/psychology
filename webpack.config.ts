import path from 'path';
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default (env: any) => {
    const config: webpack.Configuration = {
        mode: env.mode,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
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
    return config
}