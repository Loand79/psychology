import path from 'path';
import type {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

type Mode = 'production' | 'development'

interface EnvVariables {
    mode: Mode;

}

export default (env: EnvVariables) => {
    const config: Configuration = {
        mode: env.mode ?? 'development',
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