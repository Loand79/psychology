import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = ({port}: BuildOptions): DevServerConfiguration=> {
    return {
        port: port ?? 3000,
        open: true,
        historyApiFallback: true,
    }
}