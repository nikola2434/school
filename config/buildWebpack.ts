import { Configuration } from "webpack";
import { BuildOptions } from "./types";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export const buildWebpack = (options: BuildOptions): Configuration => {
  const isProd = options.mode === "production";

  const { entry, output } = options.paths;

  return {
    mode: options.mode ?? "development",
    entry,
    output: {
      path: output,
      clean: true,
      filename: "bundle.js",
    },

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(options),

    devServer: isProd ? undefined : buildDevServer(options),
  };
};