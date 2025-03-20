import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ModuleOptions} from 'webpack'

export const buildLoaders = (): ModuleOptions['rules'] => {
    return [
        {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
}