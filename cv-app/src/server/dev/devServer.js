/* eslint no-console:0 */
/* eslint consistent-return:0 */
const path = require("path");
const webpack = require("webpack");
const express = require("express");
const devMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");
const config = require("../../../webpack.development.config");
const cors = require('cors');

const request = require("request");
const nodeConfig = require("config");

const app = express();
const compiler = webpack(config);
app.use(cors());

app.use(
  devMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(hotMiddleware(compiler));

const proxy = (url) => {
  return new Promise(function (resolve, reject) {
    request.get(url, function (error, res, body) {
      if (!error && res.statusCode == 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
};

app.get(`/api/text/get/:language`, async (req, res) => {
  const result = await proxy(
    `${nodeConfig.api.cvService}/text/get/${req.params.language}`
  );
  res.send(result);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(2000, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Listening at http://localhost:2000/");
});
