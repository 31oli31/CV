const webpack = require("webpack");
const path = require("path");

const assetsDir = path.join(__dirname, "public/assets");
const vendorsDir = path.join(__dirname, "src/app/vendors");
const srcInclude = path.join(__dirname, "src/app");
const indexFile = path.join(__dirname, "src/app/index.js");

const config = {
  mode: "development",
  entry: ["react-hot-loader/patch", "webpack-hot-middleware/client", indexFile],
  output: {
    path: assetsDir,
    filename: "bundle.js",
    publicPath: "/public/assets/",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcInclude,
        exclude: [vendorsDir],
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", "css-loader",
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

function setNodeEnv() {
  return new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("dev"),
    },
  });
}

module.exports = config;
