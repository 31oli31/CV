import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const AppRouter = require("./AppRouter.jsx");

const browserHistory = createBrowserHistory();

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <AppRouter />
      </Router>
    );
  }
}

export default Root;
