import { Configuration, HotModuleReplacementPlugin } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import TsConfigPathsPlugin from "tsconfig-paths-webpack-plugin"
import * as path from "path"

const config: Configuration = {
  mode: "development",
  devtool: "eval-source-map",
  entry: ["./src/index.ts"],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-syntax-typescript",
                "@babel/plugin-syntax-jsx",
                "react-hot-loader/babel"
              ]
            }
          },
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      new TsConfigPathsPlugin({
        configFile: path.resolve(__dirname, "tsconfig.json")
      })
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    chunkFilename: "chunk-[name].js",
    filename: "[name].js"
  },
  optimization: {
    namedModules: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
}

export default config
