const webpack = require("webpack");
const path = require("path");

const assetsDir = path.join(__dirname, "public/assets");
const vendorsDir = path.join(__dirname, "src/app/vendors");
const srcInclude = path.join(__dirname, "src/app");
const indexFile = path.join(__dirname, "src/app/index.js");
const vendorImage = "/src/app/page/swiperSvg";

const config = {
  mode: "development",
  devtool: "cheap-module-source-map",
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
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
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
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({ VENDOR_IMAGES: JSON.stringify(vendorImage) }),
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
