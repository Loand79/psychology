import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ModuleOptions} from 'webpack'
import {BuildOptions} from "./types/config";

export const buildLoaders = ({isDev}: BuildOptions): ModuleOptions['rules'] => {

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        namedExport: false,
                        // auto: (resPath => return resPath.endsWith('.module.scss'))
                        exportLocalsConvention: 'as-is',
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    }
                }
            },
            "sass-loader"
        ],
    }
    const tsxLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [scssLoader, tsxLoader]
}