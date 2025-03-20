export type BuildMode = 'production' | 'development'

export interface EnvVariables {
    mode: BuildMode;
    port: number;
}

export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
}

export interface BuildOptions {
    isDev: boolean;
    paths: BuildPaths;
    mode: BuildMode;
    port: number;
}