import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";

export const buildPlugins = ({paths, mode}: BuildOptions): Configuration['plugins']=> {

    const isProd = mode === 'production';
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            title: 'Psychology',
            // filename: "psy.html",
            template: paths.html
        })
    ]

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'style.css'
            })
        )
    }

    return plugins;
}