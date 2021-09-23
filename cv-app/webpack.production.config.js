const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const assetsDir = path.join(__dirname, "build/public/assets");
const nodeModulesDir = path.join(__dirname, "node_modules");
const vendorsDir = path.join(__dirname, "src/app/vendors");
const indexFile = path.join(__dirname, "src/app/index.js");

const config = {
  entry: {
    app: indexFile,
  },
  output: {
    path: assetsDir,
    filename: "app.bundle.js",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [nodeModulesDir, vendorsDir],
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|jpe?g|gif)(\?\S*)?$/,
        type: "asset/resource",
      },
      // {
      //test: /\.(png)$/,
      // type: "asset/inline",
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [setNodeEnv(), new MiniCssExtractPlugin()],
};

function setNodeEnv() {
  return new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production"),
    },
  });
}

module.exports = config;
