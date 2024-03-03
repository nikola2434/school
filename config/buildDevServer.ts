import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export const buildDevServer = (
  options: BuildOptions
): DevServerConfiguration => {
  return {
    port: options.port ?? 8000,
    open: false,
    historyApiFallback: {
      index: "index.html",
      //   rewrites: [{ from: /^\/confirm/, to: "confirm.html" }],
      rewrites: Object.entries(options.paths.html)
        .filter(([name, path]) => name !== "index")
        .map(([name, path]) => ({
          from: new RegExp("^/" + name),
          to: `${name}.html`,
        })),
    },
    hot: true,
    static: {
      directory: options.paths.output,
    },
  };
};
