import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";

export const buildPlugins = ({paths}: BuildOptions): Configuration['plugins']=> {
    return [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            title: 'Psychology',
            // filename: "psy.html",
            template: paths.html
        })
    ]
}