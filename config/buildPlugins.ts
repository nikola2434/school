import { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";

export const buildPlugins = (
  options: BuildOptions
): Configuration["plugins"] => {
  const isProd = options.mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({ template: options.paths.html }),
    new DefinePlugin({}),
    new CopyPlugin({
      patterns: [
        {
          from: `./config.${isProd ? "prod" : "dev"}.json`,
          to: "./config.json",
        },
        {
          from: "./public",
          to: ".",
          filter: (resourcePath) => {
            if (resourcePath.includes("index.html")) return false;
            return true;
          },
        },
      ],
    }),
  ];

  if (!isProd) {
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin());
  }

  return plugins;
};
