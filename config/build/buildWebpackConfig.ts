import { Configuration } from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {BuildOptions} from "./types/config";

export function buildWebpackConfig(options: BuildOptions): Configuration {

    const {isDev, mode} = options;

    return {
        mode,
        module: {
            rules: buildLoaders()
        },
        plugins: buildPlugins(options),
        devServer: buildDevServer(options),
        devtool: isDev ? 'inline-source-map' : false,

    }
}