// @flow weak

import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";

import AppRouter from "./AppRouter";

import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import { library } from '@fortawesome/fontawesome-svg-core';
import "./index.scss";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

render(
  <Router history={browserHistory}>
    <AppRouter />
  </Router>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./AppRouter", () => {
    const RootComponent = require("./AppRouter").default;
    render(
      <Router history={browserHistory}>
        <RootComponent />
      </Router>,
      document.getElementById("root")
    );
  });
}
