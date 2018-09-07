import { Configuration, HotModuleReplacementPlugin } from "webpack"
import * as HtmlWebpackPlugin from "html-webpack-plugin"
import TsConfigPathsPlugin from "tsconfig-paths-webpack-plugin"

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
    plugins: [new TsConfigPathsPlugin()]
  },
  output: {
    devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    filename: "bundle.js"
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
