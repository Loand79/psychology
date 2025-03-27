import webpack from 'webpack';
import {BuildPaths, EnvVariables} from "./config/build/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";

export default (env: EnvVariables) => {

    const isDev = env.mode === 'development'

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src/index.tsx'),
        html: path.resolve(__dirname, 'public/index.html'),
        output: path.resolve(__dirname, 'build'),
        alias: path.resolve(__dirname, 'src')
    }

    const config: webpack.Configuration = buildWebpackConfig({
        mode: env.mode ?? 'development',
        isDev,
        paths,
        port: env.port ?? 5000
    });

    return config
}