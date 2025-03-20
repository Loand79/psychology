import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {buildDevServer} from "./config/build/buildDevServer";
import {buildPlugins} from "./config/build/buildPlugins";
import {EnvVariables} from "./config/build/types/config";
import {buildResolvers} from "./config/build/buildResolvers";

export default (env: EnvVariables) => {

    const isDev = env.mode === 'development'

    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        module: {
            rules:
        },
        resolve: buildResolvers(),
        entry: {
            psy: path.resolve(__dirname, 'src/index.tsx')
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(env.port) : undefined

    }
    return config
}