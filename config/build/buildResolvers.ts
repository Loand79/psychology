import {Configuration} from "webpack";
import {BuildOptions} from "./types/config";

export const buildResolvers = ({paths}: BuildOptions): Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '#': paths.alias
        }
    }
}