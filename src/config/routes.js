import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import PageNotFound from "../pages/NotFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Index />} />
        <Route exact path="" component={() => <PageNotFound />} />
      </Switch>
    </BrowserRouter>
  );
}
