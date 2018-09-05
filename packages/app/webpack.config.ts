import { Configuration } from "webpack"

const config: Configuration = {
  mode: "development",
  entry: ["./src/index.ts"],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["babel-plugin-syntax-typescript"]
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
    extensions: [".ts", ".js"]
  }
}

export default config
