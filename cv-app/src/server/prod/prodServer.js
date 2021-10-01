// @flow weak

"use strict";

const express = require("express");
const path = require("path");
const request = require("request");
const nodeConfig = require("config");
const cors = require('cors');

const app = express();

const BUILD_PATH = "../../../build";
const PORT = 2000;

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

app.set("port", PORT);
app.use(cors());

app.use(express.static(path.join(__dirname, BUILD_PATH)));

app.get(`/api/text/get/:language`, async (req, res) => {
  const result = await proxy(
    `${nodeConfig.api.cvService}/text/get/${req.params.language}`
  );
  res.send(result);
});

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

/* eslint-disable no-console */
app.listen(PORT, () =>
  console.log(`
    ##################################################
    
      -> Server is running on Port:${PORT}
    
    ##################################################
  `)
);
/* eslint-enable no-console */
