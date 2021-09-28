import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import home from "./page/app";


const AppRouter = () => (
  <Switch>
    <Route path="*" component={home} />
  </Switch>
);

export default AppRouter;
