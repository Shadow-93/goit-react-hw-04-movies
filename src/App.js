import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import HomePage from "./HomePage";

// import filmApi from "./services/films-api";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
